import {ReactiveDict} from 'meteor/reactive-dict';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {_} from 'meteor/underscore';
import {Vendors} from '../../api/vendors/vendors.js';
import {Menus} from '../../api/menus/menus.js';
import './home-page.html';

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
    this.subscribe('Menus');
  })
});

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  VendorsList() {
    return Vendors.find();
  },
  FavoriteVendors(){

    return Vendors.find();
  },
  MenusList() {
    /* returns all menu items */
    return Menus.find();
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
        openTime[0] = parseInt(open[0]) + 12;
      }
      if (close[1].substring(2, 4) == 'pm') {
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
  isFavorite(vendor){
    if (_.contains(vendor['favorite'], Meteor.userId())) return true;
    else {
      console.log(vendor['favorite']);
      console.log(Meteor.userId());
      return false;
    }
  },

});

Template.Home_Page.events({
  'click .ui.button'(event, instance) {

    const vendor = Vendors.findOne(instance);
    vendor['favorite'].pop(Meteor.userId());
    Vendors.update(instance, { $set: vendor });
    console.log(vendor['favorite']);
    FlowRouter.go('Home_Page');
  },
});

Template.Home_Page.onRendered(function () {
  this.$('.ui.dropdown').dropdown({
    allowAdditions: true
  });
});
