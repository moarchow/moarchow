import { Template } from 'meteor/templating';
import './landing-page.html'

Template.Landing_Page.events({
  'click .ui.massive.green.button': function () {
    event.preventDefault();
    $('#modalView')
        .modal({
          selector: {
          close: '.actions',
          approve  : '.actions .ok',
          deny: '.actions .cancel'
        },
          closable  : false,
          onDeny    : function(){
            return true;
          },
          onApprove : function() {
            return true;
          }
        })
        .modal('show')
    ;
  }
});

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
  $('.stackable.cards .image').dimmer({
    on: 'hover'
  });
});

