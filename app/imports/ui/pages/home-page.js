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
  FavoritesList(){
    /* returns list of vendors favorited by user */
    const user = Meteor.userId(0);
    var favArray = [];
    Vendors.find().forEach(function (vendor) {
      if (_.contains(vendor['favorite'], user))
        favArray.push(vendor);
    });
    return favArray;
  },
  noFavorites(){
    /* returns true if current user has not favorited any vendors*/
    const user = Meteor.userId(0);
    var favArray = [];
    Vendors.find().forEach(function (vendor) {
      if (_.contains(vendor['favorite'], user))
        favArray.push(vendor);
    });
    return favArray.length == 0;
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
  averageRating(vendor){
    if(vendor['reviews'].length > 1){
      var sum = _.reduce(vendor['reviews'], function(memo, num){ return memo + num; }, 0);
      var rating = sum/(vendor['reviews'].length -1);
      return rating;
    }
    else return 0;
  },
  userRating(vendor){
    const userID = Meteor.userId();

    const userReview =  _.find(vendor['reviews'], function(num){
      return num.user== userID;
    });

    if(userReview != null) return userReview.rating;
    else return 0;
  },
  removeVendor(vendor){
    //removes a vendor from the user's favorites
    // const vendorID = vendor._id;
    // const userID = Meteor.userId();
    // vendor['favorite'].pop(userID);
    // Vendors.update(vendorID, { $set: vendor });
  console.log("remove "+ vendor.name);
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
  },
  'click .remove-vendor':function(event){

// ???????????????????????? 

  },



});

Handlebars.registerHelper("SearchList", function (input) {
  return Session.get("SearchList");
});


