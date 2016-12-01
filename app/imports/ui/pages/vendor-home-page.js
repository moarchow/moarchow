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
    console.log(Meteor.userId());

    //returns true if this vendor is not in the user's favorites
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    console.log(vendor['favorite']);
    const userID = Meteor.userId();
    if( _.contains(vendor['favorite'], userID)){
      return true;
    }
    else return false;

  }

});
Template.Vendor_Home_Page.events({
  'click .add-favorite-button'(event, instance) {
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    vendor['favorite'].push(Meteor.userId());
    Vendors.update(FlowRouter.getParam('_id'), { $set: vendor });
    console.log(vendor['favorite']);
    FlowRouter.go('Home_Page');
  },
  'click .remove-favorite-button'(event, instance) {
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    vendor['favorite'].pop(Meteor.userId());
    Vendors.update(FlowRouter.getParam('_id'), { $set: vendor });
    console.log(vendor['favorite']);
    FlowRouter.go('Home_Page');
  },
});
Meteor.startup(function () {
  GoogleMaps.load({ key: 'AIzaSyDmoMBN4kRbUeOzHIacLxerbY50amm9EnA' });

});
