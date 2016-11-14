import {Mongo} from 'meteor/mongo';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Vendors = new Mongo.Collection('Vendors');

/**
 * Create the schema for Stuff
 */
export const VendorsSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 20,
  },
  location: {
    label: 'location',
    type: String,
    optional: false,
    max: 200,
  },
  description: {
    label: 'description',
    type: String,
    optional: false,
  },
  foodTypes: {
    label: 'foodTypes',
    type: [String],
    optional: true,
  },
  hours: {
    label: 'hours',
    type: [String],
    optional: true,
  },
  menus: {
    label: 'menus',
    type: [String],
    optional: true,
  },
  images: {
    label: 'image',
    type: String,
    optional: true,
  },

  });

Vendors.attachSchema(VendorsSchema);
