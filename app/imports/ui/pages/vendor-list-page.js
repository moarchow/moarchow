import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Vendors } from '../../api/vendors/vendors.js';


Template.Vendor_List_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Vendors');
  })
});

Template.Vendor_List_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  VendorsList() {
    return Vendors.find();
  },

});
