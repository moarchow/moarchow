import { Menus } from '../../api/menus/menus.js';
import { Vendors } from '../../api/vendors/vendors.js';
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
 /*   LE CREPE CAFE
 *    SAVORY CREPES
 * */
  {
    name: 'Cheese Louise',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, jack, and cheddar cheese trio',
    other: 'Savory Crepes'
  },
  {
    name: 'Crepe Monsieur',
    vendor: 'Le Crepe Cafe',
    description: 'Cheese trio, egg, turkey breast slice',
    other: 'Savory Crepes'
  },
  {
    name: 'Moulin Rouge',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, turkey breast slices, tomatoes, basil',
    other: 'Savory Crepes'
  },
  {
    name: 'Le Bacon',
    vendor: 'Le Crepe Cafe',
    description: 'Cheese trio, bacon, and egg',
    other: 'Savory Crepes'
  },
  {
    name: 'Veggie',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, spinach, tomatoes, basil, green onions, and bell peppers',
    other: 'Savory Crepes'
  },
  {
    name: 'Pesto-Pesto',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, home-made pesto, shredded chicken, & tomatoes',
    other: 'Savory Crepes'
  },
  {
    name: 'Poulet Legume',
    vendor: 'Le Crepe Cafe',
    description: 'Cheese trio, shredded chicken, basil, and bell peppers',
    other: 'Savory Crepes'
  },
  {
    name: "L'Italien",
    vendor: 'Le Crepe Cafe',
    description: '	Mozzarella, pepperoni, tomato sauce , and fresh basil',
    other: 'Savory Crepes'
  },{
    name: 'Tsunami',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, turkey breast slices, and all of the veggies',
    other: 'Savory Crepes'
  },
  {
    name: 'Ono Ono',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, pepperoni, pineapple, bellpeppers, and tomato sauce',
    other: 'Savory Crepes'
  },
  {
    name: 'Popeye',
    vendor: 'Le Crepe Cafe',
    description: 'Mozzarella, spinach, mushrooms, and garlic',
    other: 'Savory Crepes'
  },
  /*   LE CREPE CAFE
   *    FRESH SALADS
   * */
  {
    name: 'Signature',
    vendor: 'Le Crepe Cafe',
    description: 'Romaine lettuce, basil, shredded chicken, tomatoes, walnuts, lemon wedge and mint',
    other: 'Fresh Salads'
  },
  {
    name: 'Zeus',
    vendor: 'Le Crepe Cafe',
    description: 'Spring Mix, feta, turkey, basil, tomatoes, red onions, spinach, olive oil, lemon wedge',
    other: 'Fresh Salads'
  },
  /*   LE CREPE CAFE
   *    SWEET CREPES
   * */
  {
    name: 'Nutella',
    vendor: 'Le Crepe Cafe',
    description: 'Hazelnut chocolate',
    other: 'Sweet Crepes'
  },
  {
    name: 'Chunky Monkey',
    vendor: 'Le Crepe Cafe',
    description: 'Nutella, peanut butter, banana',
    other: 'Sweet Crepes'
  },
  {
    name: 'Nutella Banana',
    vendor: 'Le Crepe Cafe',
    description: 'Hazelnut chocolate and bananas',
    other: 'Sweet Crepes'
  },
  {
    name: 'Choco Coco',
    vendor: 'Le Crepe Cafe',
    description: 'Nutella, banana, coconut',
    other: 'Sweet Crepes'
  },
  {
    name: 'Romeo et Juliette',
    vendor: 'Le Crepe Cafe',
    description: 'Nutella, bananas, and strawberries',
    other: 'Sweet Crepes'
  },
  /*   LE CREPE CAFE
   *    DRINKS
   * */

  {
    name: 'Coffee',
    vendor: 'Le Crepe Cafe',
    description: 'Dark French Roast',
    other: 'Drinks'
  },
  {
    name: 'Espresso',
    vendor: 'Le Crepe Cafe',
    description: 'Regular, decaf, or special of the month',
    other: 'Drinks'
  },
  {
    name: 'Americano',
    vendor: 'Le Crepe Cafe',
    description: 'Espresso and hot water',
    other: 'Drinks'
  },
  {
    name: 'The Turbo',
    vendor: 'Le Crepe Cafe',
    description: 'Coffee topped with espresso',
    other: 'Drinks'
  },
  {
    name: 'Macchiato',
    vendor: 'Le Crepe Cafe',
    description: 'Espresso and a layer of froth',
    other: 'Drinks'
  },
  {
    name: 'Latte',
    vendor: 'Le Crepe Cafe',
    description: 'Espresso and steamed milk',
    other: 'Drinks'
  },

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Menus.find().count() === 0) {
  _.each(menuSeeds, function seedMenus(menu) {
    Menus.insert(menu);
  });
}
