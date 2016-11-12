import { Template } from 'meteor/templating';

Template.AppExample_Body.onCreated(function appBodyOnCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.AppExample_Body.helpers({
  // placeholder: if you display dynamic data in your layout, you will put your template helpers here.
});

Template.AppExample_Body.events({
 // placeholder: if you add a form to this top-level layout, handle the associated events here.
});
