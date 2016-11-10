import { Vendors } from '../../api/vendors/vendors.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Vendors to pre-fill the Vendors Collection.
 * @type {*[]}
 */
const vendorSeeds = [
  {
    id: 'daSpot',
    name: 'Da Spot',
    location: 'Sustainability Courtyard',
    description: 'Da Spot serves an all vegeterian menu of fresh health foods from around the globe, including Hawaiian, Eqyptian, Mediterranean, European, & Asian gourmet foods.',
    hours: {
      monday: '8:30am-3:00pm',
      tuesday: '8:30am-3:00pm',
      wednesday: '8:30am-3:00pm',
      thursday: '8:30am-3:00pm',
      friday: '8:30am-3:00pm',
    },
    foodTypes: [],
    menus: ['Monday', 'Tuesday', 'Smoothies']
  },
  {
    id: 'leCrepeCafe',
      name: 'Le Crepe Cafe',
      location: 'Richardson School of Law',
      description: "Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. They specialize in a flavorsome menu of sweet and savory crêpes and use fresh ingredients, organic when possible. Their utensils are even bio-compostable. Enjoy a crêpe any time of day, as a breakfast, snack, main course, or dessert - close your eyes and you're in Paris!",
      hours: {
        monday: '8:00am-2:00pm',
        tuesday: '8:00am-2:00pm',
        wednesday: '8:00am-2:00pm',
        thursday: '8:00am-2:00pm',
        friday: '8:00am-2:00pm',
      },
      foodTypes: [],
    menus: ['Savory Crepes', 'Sweet Crepes', 'Drinks', 'Fresh Salads'],

},
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Vendors.find().count() === 0) {
  _.each(vendorSeeds, function seedVendors(vendor) {
    Vendors.insert(vendor);
  });
}
