import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Vendors } from '../../api/vendors/vendors.js';


Template.Vendor_List_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
  })
});

Template.Vendor_List_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  VendorsList() {
    return Vendors.find();
  },
  averageRating(vendor){
    const numReviews = vendor['reviews'].length-1;
    if(numReviews <1) return 0;
    else {

      var totalRate =0;
      _.each(vendor['reviews'], function(num){
        totalRate = totalRate + num.rating;
      });

      var avgRate = parseInt(Math.round(totalRate / numReviews));
      return avgRate;
    }

  },
  reviewCount(vendor){
    const numReviews = vendor['reviews'].length-1;
    return numReviews;
  },
  'vendorImage': function (vendor) {
    return vendor.image;
  },
  isOpen(vendor){
    const day = new Date();
    const currHour = day.getHours();
    const currMin = day.getMinutes();
    const weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = weekday[day.getDay()];//string of current day of week
    // const vendor = Vendors.findOne(FlowRouter.getParam('_id'));

    if (day.getDay() == 0 || day.getDay() == 6) return false;
    else {

      let hours = vendor.hours[today].split("-");
      let open = hours[0].split(":");
      let close = hours[1].split(":");

      let openTime = [open[0], open[1].substring(0, 2)];
      let closeTime = [close[0], close[1].substring(0, 2)];
      /* changes times to 24hours */
      if (open[1].substring(2, 4) == 'pm') {
        if(open[0]==12)
          openTime[0] = 12;
        else
          openTime[0] = parseInt(open[0]) + 12;
      }
      if (close[1].substring(2, 4) == 'pm') {
        if(close[0]==12)
          closeTime[0] = 12;
        else
          closeTime[0] = parseInt(close[0]) + 12;
      }

      if (currHour == openTime[0]) {
        if (currMin >= openTime[1])
          return true;
        else return false;
      }
      else
        if (currHour == closeTime[0]) {
          if (currMin >= closeTime[1])
            return false;
          else return true;
        }

        else
          if (currHour > openTime[0] && currHour < closeTime[0])
            return true;
          else return false;
    }
  },

});
