import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Header.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

/*Template.Header.events({
  'click .ui.sidebar'() {
    $('.ui.labeled.icon.sidebar')
        .sidebar('toggle')
    ;
  },
 });*/

Template.Header.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
});