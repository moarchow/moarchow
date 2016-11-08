import { Menus } from '../../api/menus/menus.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Menu Items to pre-fill the Menus Collection.
 * @type {*[]}
 */
const menuSeeds = [
  {
    name: 'Eggplant Parmesan',
    vendor: 'Da Spot',
    other: 'Monday',
  },
  {
    name: 'Foul Modaimis',
    vendor: 'Da Spot',
    other: 'Monday',
  },
  {
    name: 'Moussakka',
    vendor: 'Da Spot',
    other: 'Monday',
  },
  {
    name: 'Thai Red Vegetable Curry',
    vendor: 'Da Spot',
    other: 'Tuesday',
  },
  {
    name: 'Sweet Dream',
    vendor: 'Da Spot',
    description: 'Strawberries, Haupia, Sorbet, Soymilk',
    other: 'Smoothies',
  },
  {
    name: 'Cheese Louise',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, jack, and cheddar cheese trio',
    other: 'Savory Crepes'
  }
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Menus.find().count() === 0) {
  _.each(menuSeeds, function seedMenus(menu) {
    Menus.insert(menu);
  });
}
