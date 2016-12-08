import {ReactiveDict} from 'meteor/reactive-dict';
import {Mongo} from 'meteor/mongo';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {_} from 'meteor/underscore';
import {Vendors} from '../../api/vendors/vendors.js';
import { Meteor } from 'meteor/meteor';


Template.Vendor_Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
  });

  GoogleMaps.ready('map', function (map) {

    Vendors.find().observe({

      added: function (document) {
        var icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
        if (document._id == Vendors.findOne(FlowRouter.getParam('_id'))._id) {
          icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
        }
        var marker = new google.maps.Marker({
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.latitude, document.longitude),
          title: document.name,
          map: map.instance,
          id: document._id,
          icon: icon
        });

        var name = document.name;
        var description = document.description;

        var contentString =
            '<h2>' + name + '</h2>' +
            '<p>' + description + '</p>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });

      }
    });
  });
});

Template.Vendor_Home_Page.helpers({
  'vendorImage': function () {
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    return vendor.image;
  },

  vendorField(fieldName) {
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    return vendor[fieldName];
  },

  vendorHours(field){
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    return vendor.hours[field];

  },
  VendorsList() {
    return Vendors.find();
  },

  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
      return {
        center: new google.maps.LatLng(vendor.latitude, vendor.longitude),
        zoom: 17
      };
    }
  },
  isOpen(){
    const day = new Date();
    const currHour = day.getHours();
    const currMin = day.getMinutes();
    const weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = weekday[day.getDay()];//string of current day of week
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));

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
  isFavorite(){
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    console.log(vendor['favorite']);
    console.log(vendor['reviews']);
    const userID = Meteor.userId();
    if( _.contains(vendor['favorite'], userID)){
      return true;
    }
    else return false;

  },
  averageRating(){
    const vendorID=FlowRouter.getParam('_id');
    const vendor = Vendors.findOne(vendorID);
    const numReviews = vendor['reviews'].length-1;
    if(numReviews <1) return 0;
    else {
      // var totalRate = _.reduce(vendor['reviews'], function(sum,num){
      //   return sum+ num.rating;
      // });
      var totalRate =0;
      _.each(vendor['reviews'], function(num){
        totalRate = totalRate + num.rating;
      });
      console.log("total ratings: " + totalRate);

      var avgRate = parseInt(Math.round(totalRate / numReviews));
      return avgRate;
    }

  },
  //var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
  reviewCount(){
    const vendorID=FlowRouter.getParam('_id');
    const vendor = Vendors.findOne(vendorID);
    const numReviews = vendor['reviews'].length-1;
    return numReviews;
  },
  userRating(){
    const vendorID=FlowRouter.getParam('_id');
    const vendor = Vendors.findOne(vendorID);
    const userID = Meteor.userId();

    const userReview =  _.find(vendor['reviews'], function(num){
      return num.user== userID;
    });
    console.log("the user's review: ");
    console.log(userReview);
    if(userReview != null) return userReview.rating;
    else return 0;

  },


});
Template.Vendor_Home_Page.events({
  // 'click .add-favorite-button'(event, instance) {
  //   const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
  //   vendor['favorite'].push(Meteor.userId());
  //   Vendors.update(FlowRouter.getParam('_id'), { $set: vendor });
  //   window.location.reload();
  //   // FlowRouter.go('Home_Page');
  //
  // },
  // 'click .remove-favorite-button'(event, instance) {
  //   const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
  //   vendor['favorite'].pop(Meteor.userId());
  //   Vendors.update(FlowRouter.getParam('_id'), { $set: vendor });
  //   window.location.reload();
  //   // FlowRouter.go('Home_Page');
  // },
  'click .update-favorite-button'(event, instance) {
    const vendorID=FlowRouter.getParam('_id');
    const vendor = Vendors.findOne(vendorID);
    const userID = Meteor.userId();
    if( _.contains(vendor['favorite'], userID)){
      vendor['favorite'].pop(userID);
      console.log("removed");
    }
    else vendor['favorite'].push(userID);
    Vendors.update(vendorID, { $set: vendor });
  },

  'click .submit-rating': function (event) {
    event.preventDefault();
    var value = $('.ui.rating').rating('get rating');
    const vendorID=FlowRouter.getParam('_id');
    const vendor = Vendors.findOne(vendorID);
    const userID = Meteor.userId();

    const userReview =  _.find(vendor['reviews'], function(num){
      return num.user== userID;
    });
    console.log("the user's review: ");
    console.log(userReview);
    if(userReview != null) vendor['reviews'].pop(userReview);
    const newReview= {user:userID, rating: value[1]};
    console.log("new value" + value[1]);
    vendor['reviews'].push(newReview);

    // console.log(vendor['reviews']);
    Vendors.update(vendorID, { $set: vendor });
  },

});
Meteor.startup(function () {
  GoogleMaps.load({ key: 'AIzaSyDmoMBN4kRbUeOzHIacLxerbY50amm9EnA' });

});

// Template.Home_Page.onRendered(function() {
//
//     // Initialize rating control
//     this.$('.ui.rating')
//         .rating();
//
// });
