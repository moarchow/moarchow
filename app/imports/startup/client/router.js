import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('Landing', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/home', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/login', {
  name: 'Log_In_Page',
  action() {
    BlazeLayout.render('Landing', { main: 'Log_In_Page' });
  },
});

FlowRouter.route('/user', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

FlowRouter.route('/user/mjm4', {
  name: 'User_Profile_Page_Example',
  action() {
    BlazeLayout.render('AppExample_Body', { main: 'User_Profile_Page_Example' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/invites', {
  name: 'List_Invites_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Invites_Page' });
  },
});

FlowRouter.route('/projects', {
  name: 'List_Projects_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Projects_Page' });
  },
});

FlowRouter.route('/vendors', {
  name: 'List_Vendors_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Vendors_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
