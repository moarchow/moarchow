import {ReactiveDict} from 'meteor/reactive-dict';
import {Mongo} from 'meteor/mongo';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {_} from 'meteor/underscore';
import {MapMarkers} from '../../api/mapmarkers/mapmarkers.js';

Template.Food_Truck_Map.onCreated(function onCreated() {

  this.autorun(() => {
    this.subscribe('MapMarkers');
  });

  GoogleMaps.ready('map', function (map) {

    var contentString =
        '<h1>Food Truck Info Label</h1>'+
        '<p>Food Truck Info Goes Here.</p>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    MapMarkers.find().observe({
      added: function (document) {
        var marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.lat, document.long),
          title: 'A Marker',
          map: map.instance,
          id: document._id
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

  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(21.298974, -157.817600),
        zoom: 17
      };
    }
  }

});
