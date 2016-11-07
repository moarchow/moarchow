import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.User_Profile_Page_Example.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
