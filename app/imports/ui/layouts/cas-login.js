import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Cas_Login.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
});

Template.Cas_Login.events({
  /**
   * Handle the click on the logout link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-logout': function casLogout(event) {
    FlowRouter.go('Landing_Page');
    event.preventDefault();
    Meteor.logout();
    return false;
  },

  /**
   * Handle the click on the profile link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-profile': function casProfile(event) {
    FlowRouter.go('User_Profile_Page');
    event.preventDefault();
    return false;
  },

  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function casLogin(event, instance) {
    FlowRouter.go('Home_Page');
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
    return false;
  },
});

// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Cas_Login.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown({
    action: 'select',
  });
});
