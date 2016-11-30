import {ReactiveDict} from 'meteor/reactive-dict';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {_} from 'meteor/underscore';
import {Vendors} from '../../api/vendors/vendors.js';
import './home-page.html';

var chowSearch = '';

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
  })
});

Template.Home_Page.helpers({

  // vendorField(fieldName){
  //   const vendor = Vendors.findOne(id='subway');
  //   return vendor && vendor[fieldName];
  // },
  // vendorHours(fieldName){
  //   return vendorField(fieldName).hours;
  // },

  /**
   * @returns {*} All of the Stuff documents.
   */
  VendorsList() {
    return Vendors.find();
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

  VendorsFoodTypes() {
    var typeArray = [];
    Vendors.find().forEach(function (vendor) {
      typeArray.push(vendor.foodTypes);
    });
    return _.sortBy(_.uniq(_.flatten(typeArray)), function (name) {
      return name;
    });
  },

});

Template.Home_Page.events({

  'click .chow-search': function (event) {
    event.preventDefault();
    var value = document.getElementById("chowSelect").value;

    var searchList = [];

    Vendors.find().forEach(function (vendor) {
      for (var i = 0; i < vendor.foodTypes.length; i++) {
        if (vendor.foodTypes[i] == value) {
          searchList.push(vendor);
        }
      }
    });
    Session.set("SearchList", searchList);
  }

});

Handlebars.registerHelper("SearchList", function (input) {
  return Session.get("SearchList");
});

