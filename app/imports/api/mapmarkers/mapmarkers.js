import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const MapMarkers = new Mongo.Collection('mapmarkers');

/**
 * Create the schema for Stuff
 */
export const MapMarkersSchema = new SimpleSchema({
  lat: {
    label: 'Latitude',
    type: Number,
    optional: false,
    decimal: true,
  },

  long: {
    label: 'Longitude',
    type: Number,
    optional: false,
    decimal: true,
  },

});

MapMarkers.attachSchema(MapMarkersSchema);
