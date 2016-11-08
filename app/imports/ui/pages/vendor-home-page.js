import {ReactiveDict} from 'meteor/reactive-dict';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {_} from 'meteor/underscore';
import {Vendors} from '../../api/vendors/vendors.js';
import {Menus} from '../../api/menus/menus.js';

Template.Vendor_Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
    this.subscribe('Menus');
  });
  // this.context = Vendors.namedContext('Vendor_Home_Page');
});

Template.Vendor_Home_Page.helpers({

  vendorField(fieldName) {
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return vendor[fieldName];
  },
  vendorHours(field){
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    return vendor.hours[field];

  },

  /**
   * @returns {*} All of the Stuff documents.
   */
  VendorsList() {
    return Vendors.find();
  },
  MenusList() {
    /* returns all menu items */
    return Menus.find();
  },
  MenuSpecific() {
    /* returns a menu specific to a vendor */
    // filter Menus for specific vendor
    /* Eventually want to organize menu items based on "other" field */
      //  create list of all "other" fields within filtered menu
      //  create a collection of menu items for each field

  },
});
