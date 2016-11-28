import {ReactiveDict} from 'meteor/reactive-dict';
import {Mongo} from 'meteor/mongo';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {_} from 'meteor/underscore';
import {Vendors} from '../../api/vendors/vendors.js';

Template.Vendor_Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
  });

  GoogleMaps.ready('map', function (map) {

    Vendors.find().observe({

      added: function (document) {
        var icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
        if (document._id == Vendors.findOne(FlowRouter.getParam('_id'))._id)
        {
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
            '<h2>' + name + '</h2>'+
            '<p>' + description + '</p>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }});
  });
});

Template.Vendor_Home_Page.helpers({
  'vendorImage': function(){
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    return vendor.image;
  },
  vendorField(fieldName) {
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
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
  }

});

Meteor.startup(function () {
  GoogleMaps.load({ key: 'AIzaSyDmoMBN4kRbUeOzHIacLxerbY50amm9EnA' });

});
