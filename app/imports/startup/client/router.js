import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/home', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/vendor/:_id', {
  name: 'Vendor_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Vendor_Home_Page' });
  },
});

FlowRouter.route('/vendors', {
  name: 'Vendor_List_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Vendor_List_Page' });
  },
});

FlowRouter.route('/map', {
  name: 'Food_Truck_Map',
  action() {
    BlazeLayout.render('App_Body', { main: 'Food_Truck_Map' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

