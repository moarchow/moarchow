import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Vendors } from '../../api/vendors/vendors.js';
import { Menus } from '../../api/menus/menus.js';

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
    this.subscribe('Menus');
  })
});

Template.Home_Page.helpers({

  // vendorField(fieldName){
  //   const vendor = Vendors.findOne(id='subway');
  //   return vendor && vendor[fieldName];
  // },
  // vendorHours(fieldName){
    //   return vendorField(fieldName).hours;
    // },


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

});
