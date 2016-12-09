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
  averageRating(vendor){
    const numReviews = vendor['reviews'].length-1;
    if(numReviews <1) return 0;
    else {

      var totalRate =0;
      _.each(vendor['reviews'], function(num){
        totalRate = totalRate + num.rating;
      });

      var avgRate = parseInt(Math.round(totalRate / numReviews));
      return avgRate;
    }

  },
  reviewCount(vendor){
    const numReviews = vendor['reviews'].length-1;
    return numReviews;
  },
  'vendorImage': function (vendor) {
    return vendor.image;
  },

});
