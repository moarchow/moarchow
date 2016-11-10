import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import { Vendors } from '../../api/vendors/vendors.js';


/* eslint-disable object-shorthand */

export const Menus = new Mongo.Collection('Menus');

/**
 * Create the schema for Stuff
 */
export const MenusSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
  },
  vendor: {
    label: 'vendor',
    type: String,
    optional: false,
    max: 200,
  },
  description: {
    label: 'description',
    type: String,
    optional: true, /* some dont have descriptions */
  },
  other: {
    /* Some menus have different subsections, so this field would be used to organize the menus on each vendors page*/
    label: 'other',
    type: String,
    optional: true,
  },
  foodTypes: {
    label: 'foodTypes',
    type: Object,
    optional: true,
  }
  /* Need to add: Food Type */
  /* wasn't sure how to include an array into the schema since a dish could have multiple food types */

});

Menus.attachSchema(MenusSchema);
