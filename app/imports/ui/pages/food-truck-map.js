import {ReactiveDict} from 'meteor/reactive-dict';
import {Mongo} from 'meteor/mongo';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {_} from 'meteor/underscore';
import { Vendors } from '../../api/vendors/vendors.js';

Template.Food_Truck_Map.onCreated(function onCreated() {

  this.autorun(() => {
    this.subscribe('MapMarkers');
    this.subscribe('Vendors');
  });

  GoogleMaps.ready('map', function (map) {

    Vendors.find().observe({
      added: function (document) {
        var marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.latitude, document.longitude),
          title: document.name,
          map: map.instance,
          id: document._id
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


Meteor.startup(function () {
  GoogleMaps.load({ key: 'AIzaSyDmoMBN4kRbUeOzHIacLxerbY50amm9EnA' });
});

Template.Food_Truck_Map.helpers({

  VendorsList() {
    return Vendors.find();
  },

  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(21.298974, -157.817600),
        zoom: 17
      };
    }
  }

});
