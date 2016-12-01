import { Template } from 'meteor/templating';
import './landing-page.html'

Template.Landing_Page.events({});

Template.Landing_Page.onRendered(function () {
  $('.ui.medium.image')
      .transition('hide')
      .transition('drop', '1s')
      .transition('jiggle', '1s')
  ;
  $('.tagline')
      .transition('hide')
      .transition('fade right', '2s')
  ;
  $('.log-button')
      .transition('hide')
      .transition('fade down', '3s')
  ;
  $('.doubling.cards .image').dimmer({
    on: 'hover'
  });
});

