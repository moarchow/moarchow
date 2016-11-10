import {ReactiveDict} from 'meteor/reactive-dict';
import {Mongo} from 'meteor/mongo';
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
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    const vendorName = vendor['name'];
    const categories = vendor['menus'];
    const filteredMenu = Menus.find({ vendor: vendorName });

    return filteredMenu;

  },
  MenuCategories(){
    const vendor = Vendors.findOne(FlowRouter.getParam('_id'));
    const vendorName = vendor['name'];
    const categories = vendor['menus'];
    console.log(categories);
    let menu = [];
    for (var category in categories) {
      var categoryName = categories[category];
      menu[category] = {
        list: Menus.find({ vendor: vendorName , other: categoryName }),
        name: categoryName,
      };
    }
    console.log(menu);
    return menu;
  },

});
