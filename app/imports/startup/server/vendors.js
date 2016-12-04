import {Vendors} from '../../api/vendors/vendors.js';
import {_} from 'meteor/underscore';

/**
 * A list of Vendors to pre-fill the Vendors Collection.
 * @type {*[]}
 */
const vendorSeeds = [
  //Le Crepe Cafe
  {
    name: 'Le Crepe Cafe',
    location: 'Richardson School of Law',
    latitude: 21.296514,
    longitude: -157.818293,
    image: 'le-crepe.jpg',
    description: "Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. They specialize in a flavorsome menu of sweet and savory crêpes and use fresh ingredients, organic when possible. Their utensils are even bio-compostable. Enjoy a crêpe any time of day, as a breakfast, snack, main course, or dessert - close your eyes and you're in Paris!",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '8:00am-2:00pm',
      tuesday: '8:00am-2:00pm',
      wednesday: '8:00am-2:00pm',
      thursday: '8:00am-2:00pm',
      friday: '8:00am-2:00pm',
    },
    foodTypes: ["Coffee", "Pastry", "French", "Salad"],
    menus: [
      {
        name: 'Savory Crepes',
        description: '',
        items: [
          {
            name: 'Cheese Louise',
            description: 'Mozzarella, jack, and cheddar cheese trio',
            price: '3.99'
          },
          {
            name: 'Crepe Monsieur',
            description: 'Cheese trio, egg, turkey breast slice',
            price: '5.99'
          },
          {
            name: 'Le Bacon',
            description: 'Cheese trio, bacon, and egg',
            price: '5.99'
          },
          {
            name: 'Veggie',
            description: 'Mozzarella, spinach, tomatoes, basil, green onions, and bell peppers',
            price: '5.99'
          },
          {
            name: 'Pesto-Pesto',
            description: 'Mozzarella, home-made pesto, shredded chicken, & tomatoes',
            price: '5.99'
          },
          {
            name: 'Poulet Legume',
            description: 'Cheese trio, shredded chicken, basil, and bell peppers',
            price: '5.99'
          },
          {
            name: "L'Italien",
            description: '	Mozzarella, pepperoni, tomato sauce , and fresh basil',
            price: '5.99'
          },
          {
            name: 'Tsunami',
            description: 'Mozzarella, turkey breast slices, and all of the veggies',
            price: '6.99'
          },
          {
            name: 'Ono Ono',
            description: 'Mozzarella, pepperoni, pineapple, bellpeppers, and tomato sauce',
            price: '5.99'
          },
          {
            name: 'Popeye',
            description: 'Mozzarella, spinach, mushrooms, and garlic',
            price: '5.50'
          },
          {
            name: 'Crepe Monsieur',
            description: 'Cheese trio, egg, turkey breast slice',
            price: '5.99'
          },
          {
            name: 'Le Bacon',
            description: 'Cheese trio, bacon, and egg',
            price: '5.99'
          }
        ]
      },

      {
        name: 'Sweet Crepes',
        description: '',
        items: [
          {
            name: 'Nutella',
            description: 'Hazelnut chocolate',
            price: '5.99'
          },
          {
            name: 'Chunky Monkey',
            description: 'Nutella, peanut butter, banana',
            price: '5.99'
          },
          {
            name: 'Choco Coco',
            description: 'Nutella, banana, coconut',
            price: '5.99'
          },
          {
            name: 'Nutella Banana',
            description: 'Hazelnut chocolate and bananas',
            price: '5.99'
          },
          {
            name: 'Romeo et Juliette',
            description: 'Nutella, bananas, and strawberries',
            price: '5.99'
          }
        ]
      },

      {
        name: 'Fresh Salads',
        description: '',
        items: [
          {
            name: 'Signature',
            description: 'Romaine lettuce, basil, shredded chicken, tomatoes, walnuts, lemon wedge and mint',
            price: '5.99'
          },
          {
            name: 'Zeus',
            description: 'Spring Mix, feta, turkey, basil, tomatoes, red onions, spinach, olive oil, lemon wedge',
            price: '5.99'
          }
        ]
      },

      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Coffee',
            description: 'Dark French Roast',
            price: '5.99'
          },
          {
            name: 'Espresso',
            description: 'Regular, decaf, or special of the month',
            price: '5.99'
          },
          {
            name: 'Americano',
            description: 'Espresso and hot water',
            price: '5.99'
          },
          {
            name: 'The Turbo',
            description: 'Coffee topped with espresso',
            price: '5.99'
          },
          {
            name: 'Macchiato',
            description: 'Espresso and a layer of froth',
            price: '5.99'
          },
          {
            name: 'Latte',
            description: 'Espresso and steamed milk',
            price: '5.99'
          }
        ]
      },

    ]
  },
  //Starbucks
  {
    name: 'Starbucks',
    location: 'Campus Center',
    latitude: 21.298510,
    longitude: -157.818887,
    image: 'le-crepe.jpg',
    description: "The store serves the full Starbucks food and beverage menu including coffee and espresso beverages, Frappuccino®, and blended beverages. The range of food offerings includes breakfast, lunch and snack items such as signature sandwiches, pastries and Starbucks Petites. (Currently in Holiday Menu mode, displaying Holiday Menu)",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '6:00am-10:00pm',
      tuesday: '6:30am-10:00pm',
      wednesday: '6:00am-10:00pm',
      thursday: '6:00am-10:00pm',
      friday: '6:00am-6:00pm',
    },
    foodTypes: ["Coffee", "Tea", "Smoothie"],
    menus: [
      {
        name: 'Coffee, Expresso, and Tea',
        description: 'Tall -> 12oz | Grande -> 16oz | Venti -> 20oz',
        items: [
          {
            name: 'Frostly Brewed Coffee',
            description: '',
            price: 'Tall: 2.30, Grande: 2.45, Venti: 2.95'
          },
          {
            name: 'Iced Coffee',
            description: 'with Vanilla or Caramel',
            price: 'Tall: 2.65, Grande: 3.25, Venti: 3.45'
          },
          {
            name: 'Cold Brew',
            description: 'Limited Daily Availability',
            price: 'Tall: 3.45, Grande: 3.95, Venti: 4.25'
          },
          {
            name: 'Vanilla Sweet Cream Cold Brew',
            description: '',
            price: 'Tall: 3.75, Grande: 4.25, Venti: 4.45'
          },
          {
            name: 'Flat White',
            description: '',
            price: 'Tall: 4.25'
          },
          {
            name: 'Cappuccino',
            description: '',
            price: 'Tall: 3.45. Grande: 4.25, Venti: 4.75'
          },
          {
            name: 'Caffe Amercano',
            description: '',
            price: 'Tall: 2.85. Grande: 2.95, Venti: 3.25'
          },
          {
            name: 'Caffe Latte',
            description: '',
            price: 'Tall: 3.45. Grande: 4.25, Venti: 4.75'
          },
          {
            name: 'Caramel Macchiato',
            description: '',
            price: 'Tall: 4.25. Grande: 4.95, Venti: 5.25'
          },
          {
            name: 'White Chocolate Mocha',
            description: '',
            price: 'Tall: 4.25. Grande: 4.95, Venti: 5.25'
          },
        ]
      },
      {
        name: 'Teavana Tea',
        description: 'Tall -> 12oz | Grande -> 16oz | Venti -> 20oz',
        items: [
          {
            name: 'Mango or Peach Tea Lemonade',
            description: '',
            price: 'Tall: 3.45. Grande: 3.95, Venti: 4.45'
          },
          {
            name: 'Shaken Iced Tea',
            description: 'Green, Black, or Caffeine-Free Passion Tango',
            price: 'Tall: 2.45. Grande: 2.95, Venti: 3.25'
          },
          {
            name: 'Full-Leaf Brewed Tea',
            description: '',
            price: 'Tall: 2.45. Grande: 2.75, Venti: 2.95'
          },
          {
            name: 'Chai Tea Latte',
            description: '',
            price: 'Tall: 3.95. Grande: 4.45, Venti: 4.95'
          },
          {
            name: 'Cinnamon Chai Tea Latte',
            description: '',
            price: 'Tall: 4.25. Grande: 4.65, Venti: 5.25'
          },
          {
            name: 'Green Tea Latte',
            description: '',
            price: 'Tall: 3.95. Grande: 4.45, Venti: 4.95'
          },
        ]
      },
      {
        name: 'HOLIDAY CLASSICS - Expresso, Coffee & Teavana Tea',
        description: 'Tall -> 12oz | Grande -> 16oz | Venti -> 20oz',
        items: [
          {
            name: 'Chestnut Praline Latte',
            description: '',
            price: 'Tall: 4.45. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Caramel Brulee Latte',
            description: '',
            price: 'Tall: 4.45. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Peppermint Mocha',
            description: '',
            price: 'Tall: 4.45. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Skinny Peppermint Mocha',
            description: '',
            price: 'Tall: 4.45. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Peppermint Hot Chocolate',
            description: '',
            price: 'Tall: 3.75. Grande: 4.35, Venti: 4.45'
          },
          {
            name: 'Eggnog Latte',
            description: '',
            price: 'Tall: 4.45. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Gingerbread Latte',
            description: '',
            price: 'Tall: 4.45. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Pumpkin Spice Latte',
            description: '',
            price: 'Tall: 4.45. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Holiday Spice Flat White',
            description: '',
            price: 'Tall: 4.45'
          },
          {
            name: 'Spiced Sweet Cream',
            description: '',
            price: 'Tall: 3.75. Grande: 4.25, Venti: 4.45'
          },
          {
            name: 'Cold Brew July 2016 Brewed Tea',
            description: 'NEW! Limited Daily Availability',
            price: 'Tall: 2.45. Grande: 2.75, Venti: 2.95'
          },
        ]
      },
      {
        name: 'HOLIDAY CLASSICS - Frappuccino',
        description: 'Blended Beverages (Tall -> 12oz | Grande -> 16oz | Venti -> 20oz)',
        items: [
          {
            name: 'Caramel Brulee',
            description: '',
            price: 'Tall: 4.65. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Peppermint Mocha',
            description: '',
            price: 'Tall: 4.65. Grande: 5.25, Venti: 5.65'
          },
          {
            name: 'Chestnut Praline',
            description: '',
            price: 'Tall: 4.65. Grande: 5.25, Venti: 5.65'
          },
        ]
      },
      {
        name: 'Blended & Refreshment - Frappuccino',
        description: 'Blended Beverages (Tall -> 12oz | Grande -> 16oz | Venti -> 20oz)',
        items: [
          {
            name: 'Caramel',
            description: '',
            price: 'Tall: 4.75. Grande: 5.25, Venti: 5.75'
          },
          {
            name: 'Mocha',
            description: '',
            price: 'Tall: 4.75. Grande: 5.25, Venti: 5.75'
          },
          {
            name: 'Coffee',
            description: '',
            price: 'Tall: 4.45. Grande: 4.95, Venti: 5.45'
          },
          {
            name: 'Java Chip',
            description: '',
            price: 'Tall: 4.75. Grande: 5.25, Venti: 5.75'
          },
          {
            name: 'Vanilla Bean Creme',
            description: '',
            price: 'Tall: 4.45. Grande: 4.95, Venti: 5.45'
          },
          {
            name: 'Double Chocolaty Chip',
            description: '',
            price: 'Tall: 4.75. Grande: 5.25, Venti: 5.75'
          },
          {
            name: 'Strawberries & Creme',
            description: '',
            price: 'Tall: 4.75. Grande: 5.25, Venti: 5.75'
          },
          {
            name: 'Green Tea',
            description: '',
            price: 'Tall: 4.75. Grande: 5.25, Venti: 5.75'
          },
        ]
      },
      {
        name: 'Blended & Refreshment - Smoothies',
        description: 'Blended with a whole banana & whey protein (contains dairy)',
        items: [
          {
            name: 'Strawberry',
            description: '',
            price: '4.65'
          },
          {
            name: 'Chocolate',
            description: '',
            price: '4.65'
          },
        ]
      },
      {
        name: 'Blended & Refreshment - Starbucks Refreshers',
        description: 'Iced Beverages (contain caffeine) (Tall -> 12oz | Grande -> 16oz | Venti -> 24oz | Trenta -> 30oz)',
        items: [
          {
            name: 'Strawberry Acai',
            description: '',
            price: 'Tall: 3.45. Grande: 3.95, Venti: 4.45, Trenta: 4.95'
          },
          {
            name: 'Very Berry Hibiscus',
            description: '',
            price: 'Tall: 3.45. Grande: 3.95, Venti: 4.45, Trenta: 4.95'
          },
          {
            name: 'Cool Lime',
            description: '',
            price: 'Tall: 3.45. Grande: 3.95, Venti: 4.45, Trenta: 4.95'
          },
        ]
      },
      {
        name: 'Customize Any Drink',
        description: '',
        items: [
          {
            name: 'Flavor',
            description: '',
            price: '50 cents'
          },
          {
            name: 'Expresso Shot',
            description: '',
            price: '80 cents'
          },
          {
            name: 'Venti Iced',
            description: '',
            price: 'up to 30 cents'
          },
          {
            name: 'Substitutions',
            description: 'Sumatra Coconut Milk,  Organic Soymilk, or NEW Almondmilk',
            price: '60 cents'
          },
        ]
      },
    ]
  },
  //Honolulu Gourmet Foods
  {
    name: 'Honolulu Gourmet Foods',
    location: 'Paradise Palms',
    latitude: 21.300976,
    longitude: -157.815640,
    image: 'le-crepe.jpg',
    description: "Honolulu Gourmet Foods features healthy, locally grown salads, sandwiches, and grab-and-go items at affordable prices. They are committed to using the freshest island-grown ingredients sourced directly from farmers and fishermen. Grab-and-go, breakfast items, or catering for any sized group are also available!",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:30am-4:00pm',
      tuesday: '10:30am-4:00pm',
      wednesday: '10:30am-4:00pm',
      thursday: '10:30am-4:00pm',
      friday: '10:30am-4:00pm',
    },
    foodTypes: ["Salad", "Sandwich", "Tea", "Smoothie", "Taco"],
    menus: [
      {
        name: 'Sandwiches',
        description: '',
        items: [
          {
            name: 'Caprese',
            description: 'Mozz Cheese, tomato & house made Pesto',
            price: '6.75'
          },
          {
            name: 'Turky, Bacon & Avacado',
            description: 'Turkey Breast, bacon, avacado "bomb", tomato and swiss cheese on Clabatta with Lime-Mayo Spread',
            price: '7.25'
          },
          {
            name: 'Italian',
            description: 'Ham, bacon, salami, tomato, onion, jalapeno, pepper-jack, dijonaise',
            price: '7.25'
          },
          {
            name: 'Grilled Four Cheese & Caramelized Onions',
            description: 'provalone, Mozzerella, Swiss and American Cheese layered with sweet caramelized onions on Sourdough bread',
            price: '5.25'
          },
        ]
      },

      {
        name: 'Taco Bar & Salad Bar',
        description: '',
        items: [
          {
            name: 'Taco Bar and Salad Bar',
            description: '',
            price: '0.56 per ounce'
          },
        ]
      },

      {
        name: 'Fresh Smoothies & Milk Teas',
        description: '20 oz | 0.50 cents to add boba balls',
        items: [
          {
            name: 'Honeydew',
            description: '',
            price: '4.50'
          },
          {
            name: 'Mango',
            description: '',
            price: '4.50'
          },
          {
            name: 'Triple Berry',
            description: '',
            price: '4.50'
          },
          {
            name: 'Taro',
            description: '',
            price: '4.50'
          },
          {
            name: 'Nutella Peanut Butter',
            description: '',
            price: '4.50'
          },
          {
            name: 'Strawberry',
            description: '',
            price: '4.50'
          },
          {
            name: 'Green Tea',
            description: '',
            price: '4.50'
          },
        ]
      },
    ]
  },
  //L&L
  {
    name: 'L&L Hawaiian Barbecue',
    location: 'Paradise Palms',
    latitude: 21.300945,
    longitude: -157.815602,
    image: 'le-crepe.jpg',
    description: "Delicious local and Asian-American fusion cuisine served in big portions at reasonable prices! Try delicious L&L favorites like the Hawaiian Barbecue beef, chicken, or short ribs! Enjoy L&L's famous fried chicken katsu, the best in town! Grab-and-go, breakfast items and party packs for groups also available.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:30am-4:00pm',
      tuesday: '10:30am-4:00pm',
      wednesday: '10:30am-4:00pm',
      thursday: '10:30am-4:00pm',
      friday: '10:30am-4:00pm',
    },
    foodTypes: ["Local", "Chicken", "Beef", "Pork", "Seafood", "Burger", "Sandwich", "Musubi", "Saimin"],
    menus: [
      {
        name: 'Combo Plates',
        description: '',
        items: [
          {
            name: 'BBQ Mix',
            description: '',
            price: '10.55'
          },
          {
            name: 'Mixed Plate',
            description: 'Ham stk, Teri Beef, & a choice of Stew, curry, or chili',
            price: '10.55'
          },
          {
            name: 'Seafood Combo',
            description: 'fish, shrimp, and a choice of BBQ chx, Teri Beef, or Ribs',
            price: '10.55'
          },
          {
            name: 'Seafood Mix',
            description: 'mahi, shrimp, and scallop',
            price: '10.95'
          },
          {
            name: 'Mixed Combo Plate',
            description: 'choice of 1 seafood & 1 meat',
            price: '10.55'
          },
          {
            name: 'Mixed Combo Plate',
            description: 'choice of 2 meats',
            price: '9.25'
          },
          {
            name: 'New York Steak Combo',
            description: '8 oz New York Steak & 3 Fried Shrimp',
            price: '11.55'
          },
          {
            name: 'Bento',
            description: 'Teri Beef, BBQ Chicken, Fish & Shrimp',
            price: '9.95'
          },
        ]
      },

      {
        name: 'Breakfast',
        description: 'Open - 10:30 am',
        items: [
          {
            name: 'Breakfast Plates',
            description: 'Choice of Meat, 2 Eggs, Rice ',
            price: '5.25'
          },
          {
            name: 'Omelet',
            description: 'Choice of Meat',
            price: '5.25'
          },
          {
            name: 'Ham & Egg Sandwich',
            description: '',
            price: '3.35'
          },
          {
            name: 'Backon & Egg Sandwich/BLT',
            description: '',
            price: '3.35'
          },
          {
            name: 'French Toast(3)',
            description: '',
            price: '3.35'
          },
          {
            name: 'Sam & Egg Sandwich',
            description: '',
            price: '3.85'
          },
          {
            name: 'Portuguese Saussage & Egg Sandwich',
            description: '',
            price: '3.85'
          },
          {
            name: 'DBL Portuguese Saussage & Egg Sandwich',
            description: '',
            price: '4.55'
          },
          {
            name: 'Grilled Cheese Sandwich',
            description: '',
            price: '2.05'
          },
        ]
      },

      {
        name: 'Healthier Options',
        description: '',
        items: [
          {
            name: 'BBQ Chicken',
            description: '',
            price: '7.10'
          },
          {
            name: 'Garlic Shrimp',
            description: '',
            price: '9.15'
          },
          {
            name: 'Hawaiian Atkins Plate',
            description: '',
            price: 'Mini: 6.85, Regular: 10,55'
          },
        ]
      },

      {
        name: 'Chicken',
        description: '',
        items: [
          {
            name: 'BBQ Chicken',
            description: '',
            price: 'Mini: 6.75, Regular: 8.50'
          },
          {
            name: 'Chicken Katsu',
            description: '',
            price: 'Mini: 6.75, Regular: 8.50'
          },
          {
            name: 'Chicken Cutlet',
            description: 'with gravy',
            price: 'Mini: 6.75, Regular: 8.50'
          },
          {
            name: 'Chicken Katsu Curry',
            description: '',
            price: 'Mini: 6.95, Regular: 9.05'
          },
          {
            name: 'Mochiko Chicken',
            description: '',
            price: 'Mini: 6.75, Regular: 8.50'
          },
          {
            name: 'Garlic Chicken',
            description: '',
            price: 'Mini: 7.05, Regular: 9.15'
          },
          {
            name: 'Fried Chicken',
            description: '',
            price: 'Mini: 7.05, Regular: 9.15'
          },
        ]
      },

      {
        name: 'Beef',
        description: '',
        items: [
          {
            name: 'Hamburger Steak',
            description: '',
            price: 'Mini: 7.15, Regular: 9.25'
          },
          {
            name: 'Teriyaki Beef',
            description: '',
            price: 'Mini: 7.15, Regular: 9.25'
          },
          {
            name: 'BBQ Short Ribs Cutlet',
            description: '',
            price: 'Mini: 7.95, Regular: 10.55'
          },
          {
            name: 'Loco Moco',
            description: '',
            price: 'Mini: 7.15, Regular: 9.25'
          },
          {
            name: 'Beef Stew',
            description: '',
            price: 'Mini: 6.75, Regular: 8.55'
          },
          {
            name: 'Beef Curry',
            description: '',
            price: 'Mini: 6.75, Regular: 8.55'
          },
          {
            name: 'Breaded Veal Cutlet',
            description: '',
            price: 'Mini: 6.75, Regular: 8.85'
          },
          {
            name: 'New York Steak',
            description: '',
            price: '10.85'
          },
        ]
      },

      {
        name: 'Pork',
        description: '',
        items: [
          {
            name: 'Kalua Pork',
            description: 'with cabbage',
            price: 'Mini: 7.45, Regular: 9.45'
          },
          {
            name: 'Teriyaki Pork Chops',
            description: '',
            price: 'Mini: 7.25, Regular: 9.25'
          },
          {
            name: 'Breaded Pork Chops',
            description: '',
            price: 'Mini: 7.25, Regular: 9.25'
          },
          {
            name: 'Grilled Pork Chops',
            description: '',
            price: 'Mini: 7.25, Regular: 9.25'
          },
          {
            name: 'Garlic Pork Chops',
            description: '',
            price: 'Mini: 7.45, Regular: 9.45'
          },
          {
            name: 'Lau Lau',
            description: '',
            price: 'Mini: 7.45, Regular: 9.45'
          },
        ]
      },

      {
        name: 'Bowls',
        description: '',
        items: [
          {
            name: 'BBQ Chicken',
            description: '',
            price: '6.05'
          },
          {
            name: 'Chicken Katsu',
            description: '',
            price: '6.05'
          },
          {
            name: 'Chicken Katsu Curry',
            description: '',
            price: '6.05'
          },
          {
            name: 'Kalua Pork',
            description: 'with cabbage',
            price: '6.05'
          },
          {
            name: 'Teriyaki Beef',
            description: '',
            price: '6.25'
          },
          {
            name: 'Beef Curry',
            description: '',
            price: '6.05'
          },
          {
            name: 'Beef Stew',
            description: '',
            price: '6.05'
          },
        ]
      },

      {
        name: 'Seafood',
        description: '',
        items: [
          {
            name: 'Fried Shrimp',
            description: '',
            price: 'Mini: 7.15, Regular: 9.15'
          },
          {
            name: 'Fried Fish Fillet',
            description: '',
            price: 'Mini: 7.25, Regular: 9.35'
          },
          {
            name: 'Grilled Fish Fillet',
            description: '',
            price: 'Mini: 7.25, Regular: 9.35'
          },
          {
            name: 'Garlic Fish Fillet',
            description: '',
            price: 'Mini: 7.55, Regular: 9.55'
          },
          {
            name: 'Garlic Shrimp',
            description: '',
            price: '9.95'
          },
        ]
      },

      {
        name: 'Burgers & Sandwiches',
        description: '',
        items: [
          {
            name: 'Hamburger',
            description: '',
            price: '2.45'
          },
          {
            name: 'Dbl Hamburger',
            description: '',
            price: '3.65'
          },
          {
            name: 'Cheeseburger',
            description: '',
            price: '2.65'
          },
          {
            name: 'Dbl Cheeseburger',
            description: '',
            price: '3.85'
          },
          {
            name: 'BBQ burger',
            description: '',
            price: '2.85'
          },
          {
            name: 'Dbl BBQ burger',
            description: '',
            price: '3.85'
          },
          {
            name: 'BBQ cheeseburger',
            description: '',
            price: '3.05'
          },
          {
            name: 'Dbl BBQ cheeseburger',
            description: '',
            price: '4.05'
          },
          {
            name: 'BBQ Chicken Sandwich',
            description: '',
            price: '3.35'
          },
          {
            name: 'Dbl Chicken Sandwich',
            description: '',
            price: '4.35'
          },
          {
            name: 'Teriyaki Beef Sandwich',
            description: '',
            price: '3.45'
          },
          {
            name: 'Dbl Teriyaki Beef Sandwich',
            description: '',
            price: '4.45'
          },
          {
            name: 'Mahi Mahi Sandwich',
            description: '',
            price: '3.35'
          },
          {
            name: 'Dbl Mahi Mahi Sandwich',
            description: '',
            price: '4.55'
          },
          {
            name: 'Garden Burger',
            description: '',
            price: '3.65'
          },
          {
            name: 'Shrimp Burger',
            description: '',
            price: '3.65'
          },
          {
            name: 'Saimin Burger',
            description: '',
            price: '5.95'
          },
          {
            name: 'Add Deluxe',
            description: 'lettuce, tomato, onion',
            price: '0.95'
          },
        ]
      },

      {
        name: 'Saimin',
        description: '',
        items: [
          {
            name: 'Spam Saimin',
            description: '',
            price: '3.95'
          },
          {
            name: 'BBQ Chicken Saimin',
            description: '',
            price: '5.15'
          },
          {
            name: 'Teriyaki Beef Saimin',
            description: '',
            price: '5.15'
          },
          {
            name: 'Aloha Saimin',
            description: '',
            price: '6.15'
          },
        ]
      },

      {
        name: 'Musubi',
        description: '',
        items: [
          {
            name: 'Spam Musubi',
            description: '',
            price: '2.40'
          },
          {
            name: 'BBQ Chicken Musubi',
            description: '',
            price: '2.40'
          },
        ]
      },

      {
        name: 'Sides',
        description: '',
        items: [
          {
            name: 'French Fries',
            description: '',
            price: '3.15'
          },
          {
            name: 'Gravy Fries',
            description: '',
            price: '3.55'
          },
          {
            name: 'Steamed White Rice',
            description: '',
            price: '0.85'
          },
          {
            name: 'Brown Rice',
            description: '',
            price: '1.10'
          },
          {
            name: 'Macaroni Salad',
            description: '',
            price: '0.95'
          },
          {
            name: 'Tossed Greens',
            description: '',
            price: '0.95'
          },
        ]
      },

      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Fountain Drink',
            description: '',
            price: '(20 oz): 1.69, (32 oz): 1.89, (44 oz): 2.09'
          },
        ]
      }
    ]
  },

  //Bale
  {
    name: 'Bale',
    location: 'Hemenway Hall',
    latitude: 21.298850,
    longitude: -157.819614,
    image: 'le-crepe.jpg',
    description: "Deliciously healthy Vietnamese cuisine, local favorites, fresh baked French rolls and huge, flaky croissants at affordable prices that everyone can enjoy!",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:00am-8:00pm',
      tuesday: '10:00am-8:00pm',
      wednesday: '10:00am-8:00pm',
      thursday: '10:00am-8:00pm',
      friday: '10:00am-8:00pm',
    },
    foodTypes: ["Vietnamese", "Sandwich", "Salads",],
    menus: [
      {
        name: 'Vietnamese Pho',
        description: 'Served with rice noodles, fresh bean sprouts, basil & lemon. Add: Onion, green onion, cilantro, & jalepeno. "Vegetarian broth avaiable upon request.',
        items: [
          {
            name: 'Rare Beef, Meatball & Brisket',
            description: '',
            price: '7.50'
          },
          {
            name: 'Shreeded Chicken',
            description: '',
            price: '7.50'
          },
          {
            name: 'Tofu & Vegetable',
            description: 'with carrots, broccoli, and celery',
            price: '7.50'
          },
        ]
      },

      {
        name: 'Pupus',
        description: '',
        items: [
          {
            name: 'Chicken Spring Roll',
            description: '',
            price: '1.50'
          },
          {
            name: 'Pommes Frites',
            description: '',
            price: '4.00'
          },
          {
            name: 'Garlic Pommes Frites',
            description: '',
            price: '6.00'
          },
          {
            name: 'Onion Rings',
            description: '',
            price: '4.00'
          },
          {
            name: 'Chicken Tenders & Frites',
            description: '',
            price: '8.75'
          },
          {
            name: 'Fish & Frites',
            description: '',
            price: '8.75'
          },
          {
            name: 'Crab & Cheese Won Tons',
            description: '',
            price: '4.50'
          },
          {
            name: 'Mac & Cheese',
            description: '',
            price: '4.75'
          },
          {
            name: 'Asian Spicy Buffalo Wings',
            description: '',
            price: '6.75'
          },
          {
            name: 'Mozzarella Sticks',
            description: '',
            price: '6.00'
          }
        ]
      },

      {
        name: 'Ba-Le Banh Mi',
        description: 'Served vietnamese style on french bread with house-made mayo, pickled daikon and carrots, cucumber, and cilantro.',
        items: [
          {
            name: 'Turkey',
            description: '',
            price: '5.00'
          },
          {
            name: 'Ham',
            description: '',
            price: '5.00'
          },
          {
            name: 'Tofu',
            description: '',
            price: '5.00'
          },
          {
            name: 'Tuna',
            description: '',
            price: '5.00'
          },
          {
            name: 'Chicken',
            description: '',
            price: '5.00'
          },
          {
            name: 'Pastrami',
            description: '',
            price: '5.25'
          },
          {
            name: 'Ham & Pate',
            description: '',
            price: '5.25'
          },
          {
            name: 'Lemongrass Chicken',
            description: '',
            price: '5.25'
          },
          {
            name: 'Roast Beef',
            description: '',
            price: '5.50'
          },
          {
            name: 'Chicken Meatball',
            description: '',
            price: '5.50'
          },
          {
            name: 'Kalua Pork',
            description: '',
            price: '5.50'
          },
          {
            name: 'Vegetarian',
            description: '',
            price: '4.50'
          }
        ]
      },

      {
        name: 'La Tour Cafe Sandwiches',
        description: '',
        items: [
          {
            name: 'Chicken Pesto Panini',
            description: 'Baked chicken, spinach, swiss cheese, and pesto on sourdough.',
            price: '7.00'
          },
          {
            name: 'Turkey Sundried Tomato Panini',
            description: 'Turkey, sprinach, provolone and sundried tomator spread on sourdough.',
            price: '7.00'
          },
          {
            name: 'Grilled Vegetable Panini',
            description: 'Grilled peppers, zucchini, eggplat, spinach, provolone, and pesto on sourdough ',
            price: '7.00'
          },
          {
            name: 'Italian Sandwich',
            description: 'Salami, prosciutoo, soppressata, capicola, arugula, and havarti on french egg roll',
            price: '7.00'
          },
          {
            name: 'Pastrami Deli Sandwich',
            description: 'Pastrami Navel, corned beef, sauerkraut, and dijon on organic sprouted multigrain',
            price: '7.75'
          }
        ]
      },

      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Black or Taro Milk Tea',
            description: '',
            price: '3.75'
          },
          {
            name: 'Thai Tea',
            description: '',
            price: '4.25'
          },
          {
            name: 'Boba Tea',
            description: '',
            price: '4.25'
          }
        ]
      }
    ]
  },

  //Manoa Garden
  {
    name: 'Manoa Garden',
    location: 'Hemenway Hall',
    latitude: 21.298816,
    longitude: -157.819757,
    image: 'le-crepe.jpg',
    description: "The university's only watering hole!",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '12:00pm-7:30pm',
      tuesday: '12:00pm-7:30pm',
      wednesday: '12:00pm-7:30pm',
      thursday: '12:00pm-7:30pm',
      friday: '12:00pm-8:30pm',
    },
    foodTypes: ["Alcohol"],
    menus: [
      {
        name: 'Liquor',
        description: '',
        items: [
          {
            name: 'Well',
            description: '',
            price: '7.50'
          },
          {
            name: 'Call',
            description: '',
            price: '3.50'
          },
          {
            name: 'Premium',
            description: '',
            price: '4.00'
          },
          {
            name: 'Top Shelf',
            description: '',
            price: '5.00'
          },
          {
            name: 'Super Premium',
            description: '',
            price: '6.00'
          },
        ]
      },

      {
        name: 'Specialty Drinks',
        description: '',
        items: [
          {
            name: 'Long Island',
            description: '',
            price: '7.00'
          },
          {
            name: 'Chernobyl',
            description: '',
            price: '7.00'
          },
          {
            name: 'Margarita',
            description: '',
            price: '6.00'
          },
          {
            name: 'Star Burst',
            description: '',
            price: '9.00'
          }
        ]
      },

      {
        name: 'Wine',
        description: '',
        items: [
          {
            name: 'Cabernet',
            description: '',
            price: '4.25'
          },
          {
            name: 'Chardonnay',
            description: '',
            price: '4.25'
          }
        ]
      },

      {
        name: 'Soft Drinks',
        description: '',
        items: [
          {
            name: 'Red Bull',
            description: '',
            price: '2.50'
          },
          {
            name: 'Soda',
            description: '',
            price: '1.75'
          },
          {
            name: 'Juice',
            description: '',
            price: '2.25'
          }
        ]
      },

      {
        name: 'Bottled Beer',
        description: '',
        items: [
          {
            name: 'Miller Lite',
            description: '',
            price: '3.25'
          },
          {
            name: 'Maui Big Swell IPA',
            description: '',
            price: '4.00'
          },
          {
            name: 'Heineken',
            description: '',
            price: '4.00'
          },
          {
            name: 'Guinness',
            description: '',
            price: '4.00'
          },
          {
            name: 'Corona Extra',
            description: '',
            price: '4.00'
          },
          {
            name: 'Maui Coconut Porter',
            description: '',
            price: '4.00'
          },
          {
            name: 'Heineken Light',
            description: '',
            price: '4.00'
          },
          {
            name: 'Sierra Nevada Torpedo',
            description: '',
            price: '4.00'
          },
          {
            name: 'Eye of the Hawk',
            description: '',
            price: '4.00'
          }
        ]
      },
      {
        name: 'Draft Beer',
        description: '',
        items: [
          {
            name: 'Bug Light',
            description: '',
            price: '5.75'
          },
          {
            name: 'New Castle',
            description: '',
            price: '6.50'
          },
          {
            name: 'Stella Artois',
            description: '',
            price: '6.50'
          },
          {
            name: 'Sam Adams',
            description: '',
            price: '6.50'
          },
          {
            name: 'Widmer Hefeweizen',
            description: '',
            price: '6.50'
          },
          {
            name: 'Goose Island IPA',
            description: '',
            price: '6.50'
          },
          {
            name: 'Blue Moon',
            description: '',
            price: '6.50'
          },
          {
            name: 'Kona Long Board Lager',
            description: '',
            price: '6.50'
          },
          {
            name: 'Rogue Dead Guy Ale',
            description: '',
            price: '9.00'
          }
        ]
      }
    ]
  },

  //The Curb
  {
    name: 'The Curb',
    location: 'Paradise Palms',
    latitude: 21.300953,
    longitude: -157.815766,
    image: 'le-crepe.jpg',
    description: "The Curb seeks to inspire, to caffeinate, and to expand the coffee horizons of the campus population! Popular as a food truck and now a regular in the Paradise Palms food court, The Curb is known for their coffees sourced from farms throughout the state and roasted at Honolulu’s Downtown Coffee. Each week, they also offer a special microlot or single origin coffee from around the world roasted by Dillanos Coffee Roasters, 2011 Roast Magazine Roaster of the Year.  A daily variety of fresh pastries, vegetarian sandwiches, teas and other beverages, plus shave ice, round out the menu of this quirky favorite.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '7:00am-6:00pm',
      tuesday: '7:00am-6:00pm',
      wednesday: '7:00am-6:00pm',
      thursday: '7:00am-6:00pm',
      friday: '7:00am-5:00pm',
    },
    foodTypes: ["Coffee", "Tea", "Pastry", "Baked"],
    menus: [
      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Drip Coffee',
            description: '',
            price: 'S:2.15 M:2.39 L:2.87'
          },
          {
            name: 'Latte',
            description: '',
            price: 'S:3.82 M:4.06 L:4.54'
          },
          {
            name: 'Americano',
            description: '',
            price: 'S:2.87 L:3.82'
          },
          {
            name: 'Espresso',
            description: '',
            price: 'S:2.87'
          },
          {
            name: 'Hot Chocolate',
            description: '',
            price: 'S:3.34 M:3.82 L:4.30'
          },
          {
            name: 'Cortado',
            description: '',
            price: 'S:3.34'
          },
          {
            name: 'Macchiato',
            description: '',
            price: 'S:3.34'
          },
          {
            name: 'Cappuccino',
            description: '',
            price: 'S:3.58'
          },
          {
            name: 'Mocha',
            description: '',
            price: 'S:4.15 M:4.54 L:5.25'
          },
          {
            name: 'White Mocha',
            description: '',
            price: 'S:4.15 M:4.54 L:5.25'
          },
          {
            name: 'Cold Brew',
            description: '',
            price: 'S:2.87 L:3.34'
          },
          {
            name: 'Iced Tea',
            description: '',
            price: 'S:2.63 L:2.87'
          },
          {
            name: 'Chai Latte',
            description: '',
            price: 'S:4.30 L:4.54'
          },
          {
            name: 'Matcha Latte Brew',
            description: '',
            price: 'S:4.30 L:4.54'
          },
          {
            name: 'Republic Tea',
            description: '',
            price: 'S:1.77 L:2.24'
          }
        ]
      },
      {
        name: 'Food',
        description: '',
        items: [
          {
            name: 'Banana Bread',
            description: '',
            price: '5.00'
          },
          {
            name: 'Matcha Chocolate Chip Scone',
            description: '',
            price: '3.00'
          },
          {
            name: 'Bacon Cheddar Scone',
            description: '',
            price: '3.00'
          },
          {
            name: 'Macadamia nut white chocolate chip cookie',
            description: '',
            price: '2.50'
          },
          {
            name: 'Snickerdoodle',
            description: '',
            price: '2.50'
          },
          {
            name: 'Chocolate chip cookie',
            description: '',
            price: '2.50'
          },
          {
            name: 'Papaya w/ lemon',
            description: '',
            price: '3.00'
          },
        ]
      },
    ]
  },

  //India Cafe
  {
    name: 'India Cafe',
    location: 'Paradise Palms',
    latitude: 21.300992,
    longitude: -157.815684,
    image: 'le-crepe.jpg',
    description: "India Café offers something for everyone with their signature exotic South Indian and Malaysian cuisine. Daily specials include chicken curry, lamb masala, garlic shrimp, seafood curry, spinach tofu, spicy eggplant, curried potatoes, coconut cabbage & over 10 different vegetarian entrees to choose from. Spiciness ranges from mild to very hot.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:30am-4:00pm',
      tuesday: '10:30am-4:00pm',
      wednesday: '10:30am-4:00pm',
      thursday: '10:30am-4:00pm',
      friday: '10:30am-4:00pm',
    },
    foodTypes: ["Indian", "Curry"],
    menus: [
      {
        name: 'Curry Platters',
        description: 'All platters include rice',
        items: [
          {
            name: 'Regular Meat Plate',
            description: 'Choose 1 tasty meat and 2 sides',
            price: '7.89'
          },
          {
            name: 'Mini Meat Plate',
            description: 'Choose 1 tasty meat and 1 side',
            price: '6.31'
          },
          {
            name: 'Regular Vegetarian',
            description: 'Choose any 3 vegetarian/vegan entrees',
            price: '7.49'
          },
          {
            name: 'Mini Vegetarian',
            description: 'Choose any 2 vegetarian/vegan entrees',
            price: '5.97'
          },
          {
            name: 'Raja\'s Combo',
            description: 'Choose 2 meats and 2 sides',
            price: '8.12'
          },
        ]
      },
      {
        name: 'Breads/Apps',
        description: '',
        items: [
          {
            name: 'Curry Puff Samosa',
            description: '',
            price: '2.39'
          },
          {
            name: 'Roti Parastha',
            description: '',
            price: '1.91'
          },
        ]
      },
      {
        name: 'Exotic Drinks',
        description: '',
        items: [
          {
            name: 'Hot Chai Tea',
            description: '',
            price: '2.39'
          },
          {
            name: 'Watermelon Juice',
            description: '',
            price: '2.39'
          },
          {
            name: 'Mango Lasai',
            description: '',
            price: '2.39'
          },
          {
            name: 'Coconut Juice',
            description: '',
            price: '1.91'
          },
          {
            name: 'Lychee Juice',
            description: '',
            price: '1.43'
          },
          {
            name: 'Thai Ice Tea',
            description: '',
            price: '1.91'
          },
        ]
      },
    ]
  },

  //Super Gyros
  {
    name: 'Super Gyros',
    location: 'Paradise Palms',
    latitude: 21.300999,
    longitude: -157.815644,
    image: 'le-crepe.jpg',
    description: "Greek-style meat or vegetarian pita sandwiches, salads, smoothies, and more are quick, fresh, and healthy. The perfectly seasoned lamb and beef are cooked on a traditional vertical broiler, locking in flavor and rendering out fats.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:30am-4:00pm',
      tuesday: '10:30am-4:00pm',
      wednesday: '10:30am-4:00pm',
      thursday: '10:30am-4:00pm',
      friday: '10:30am-4:00pm',
    },
    foodTypes: ["Greek"],
    menus: [
      {
        name: 'Super Gyros and Sandwiches',
        description: '',
        items: [
          {
            name: 'Gyros Sandwich',
            description: 'Beef and lamb wrapped in pita, topped with tomatoes, onions, and tzatziki sauce',
            price: '6.21'
          },
          {
            name: 'Gyros Salad',
            description: 'With meat and pita',
            price: '7.88'
          },
          {
            name: 'Chicken Pita Sandwich',
            description: '',
            price: '6.21'
          },
          {
            name: 'Super Greek Salad',
            description: 'Served with healthy portions of local romaine, tomatoes, red onions, cucumbers, warm pita slices, hummus and tzatziki sauce.',
            price: '7.64'
          },
        ]
      },
      {
        name: 'Super Drinks',
        description: '',
        items: [
          {
            name: 'Thai Iced Tea',
            description: '',
            price: '1.95'
          },
          {
            name: 'Coconut Juice',
            description: '',
            price: '1.95'
          },
        ]
      },
      {
        name: 'Super Sides',
        description: '',
        items: [
          {
            name: 'Bakalava',
            description: 'A rich, sweet pastry made of layers of filo dough filled with chopped nuts and sweetened with syrup and cinnamon',
            price: '1.43'
          },
          {
            name: 'Feta Cheese',
            description: '',
            price: '0.72'
          },
          {
            name: 'Hummus',
            description: 'House made chic pea, garlic and herb spiced dip.',
            price: '0.72'
          },
          {
            name: 'Pita',
            description: '',
            price: '1.43'
          },
        ]
      },
    ]
  },

  //Panda Express
  {
    name: 'Panda Express',
    location: 'Paradise Palms',
    latitude: 21.300996,
    longitude: -157.815618,
    image: 'le-crepe.jpg',
    description: "Panda Express serves gourmet Chinese food made with only the freshest ingredients. Famous for its Orange Chicken, they also offer a number of Wok Smart entrées that contain less than 250 calories per serving, such as Shanghai Angus Steak, Kung Pao Chicken, and Broccoli Beef. Other favorites include Beijing Beef, Sweetfire Chicken Breast, and Honey Walnut Shrimp.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:30am-4:00pm',
      tuesday: '10:30am-4:00pm',
      wednesday: '10:30am-4:00pm',
      thursday: '10:30am-4:00pm',
      friday: '10:30am-4:00pm',
    },
    foodTypes: ["Chinese"],
    menus: [
      {
        name: 'Pick A Meal',
        description: '',
        items: [
          {
            name: 'Bowl',
            description: '1 entree and 1 side',
            price: '7.50'
          },
          {
            name: 'Plate',
            description: '2 entrees and 1 side',
            price: '8.50'
          },
          {
            name: 'Bigger Plate',
            description: '3 entrees and 1 side',
            price: '10.00'
          },
        ]
      },
      {
        name: 'Entrees',
        description: '',
        items: [
          {
            name: 'Orange Chicken',
            description: '',
            price: ''
          },
          {
            name: 'String Bean Chicken Breast',
            description: '',
            price: ''
          },
          {
            name: 'Beijing Beef',
            description: '',
            price: ''
          },
          {
            name: 'Broccoli Beef',
            description: '',
            price: ''
          },
          {
            name: 'SweetFire Chicken Breast',
            description: '',
            price: ''
          },
          {
            name: 'Mushroom Chicken',
            description: '',
            price: ''
          },
          {
            name: 'Black Pepper Chicken',
            description: '',
            price: ''
          },
          {
            name: 'Mandarian Chicken',
            description: '',
            price: ''
          },
          {
            name: 'Kung Pao chicken',
            description: '',
            price: ''
          },
          {
            name: 'Honey Walnut Shrimp',
            description: '',
            price: ''
          },
        ]
      },
      {
        name: 'Sides',
        description: '',
        items: [
          {
            name: 'Mixed Veggies',
            description: '',
            price: ''
          },
          {
            name: 'Chow Mein',
            description: '',
            price: ''
          },
          {
            name: 'Friend Rice',
            description: '',
            price: ''
          },
          {
            name: 'Steamed Rice',
            description: '',
            price: ''
          },
        ]
      },
      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Fountain Drink',
            description: '',
            price: 'S:2.00 M:2.20 L:2.40'
          },
          {
            name: 'Bottled Water',
            description: '',
            price: '2.10'
          },
          {
            name: 'Bottled Drinks',
            description: '',
            price: '2:40'
          },
          {
            name: 'Juice',
            description: '',
            price: '2.20'
          },
        ]
      },
    ]
  },

  //Dominos
  {
    name: 'Dominos Express',
    location: 'Paradise Palms',
    latitude: 21.300953,
    longitude: -157.815595,
    image: 'le-crepe.jpg',
    description: "Domino's Express brings you their well-known, tasty pizzas at a quick and convenient counter in the Paradise Palms food court. They’re dedicated to providing quality products and professional customer service to make your UH experience even more enjoyable. From a single slice to a hundred pizzas for the team, Domino’s has got you covered!",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:00am-4:00pm',
      tuesday: '10:00am-4:00pm',
      wednesday: '10:00am-4:00pm',
      thursday: '10:00am-4:00pm',
      friday: '10:00am-4:00pm',
    },
    foodTypes: ["Pizza", "Wings"],
    menus: [
      {
        name: 'Pizza',
        description: '',
        items: [
          {
            name: '1 Pizza 1 Topping',
            description: '',
            price: '17.00'
          },
          {
            name: '1 Pizza 5 Toppings',
            description: '',
            price: '19.00'
          },
          {
            name: '2 Pizzas 5 Toppings',
            description: '',
            price: '35.00'
          },
          {
            name: 'Pizza Slice',
            description: '',
            price: '3.25'
          },
        ]
      },
      {
        name: 'Pizza by the slice',
        description: '1 Slice: $3.25 | 2 Slices: $6.50',
        items: [
          {
            name: '1 slice, 20 oz. soda',
            description: 'special',
            price: '5.00'
          },
          {
            name: '1 slice, 20 oz. soda, breadsticks',
            description: 'special',
            price: '6.00'
          },
          {
            name: '1 slice, 20 oz. soda, 4 pc Wings',
            description: '',
            price: '8.50'
          },
          {
            name: '2 slices, 20 oz. soda',
            description: '',
            price: '7.50'
          },
          {
            name: '2 slices, 20 oz. soda, breadsticks',
            description: '',
            price: '9.00'
          },
        ]
      },
      {
        name: 'Specials',
        description: '',
        items: [
          {
            name: '1 Slice, 20oz Drink and breadsticks',
            description: '',
            price: '6.00'
          },
          {
            name: '1 Personal, 20oz Drink and breadsticks',
            description: '',
            price: '8.00'
          },
          {
            name: '2 Slices, 20oz drink and breadsticks',
            description: '',
            price: '9.00'
          },
          {
            name: 'Chicken Alfredo, 20oz drink and breadsticks',
            description: '',
            price: '9.00'
          },
        ]
      },
    ]
  },

  //The Bean Counter
  {
    name: 'The Bean Counter',
    location: 'Shidler College of Business',
    latitude: 21.300912,
    longitude: -157.820191,
    image: 'le-crepe.jpg',
    description: "The Bean Counter serves up brewed coffee from the Hawaiian Islands and fulfills your caffeinated desires with a full service espresso bar. Feed your growling stomach with a dizzying array of bagels with homemade spreads, or chow down with our savory wraps, healthy salads and sweet treats.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '7:30am-6:00pm',
      tuesday: '7:30am-6:00pm',
      wednesday: '7:30am-6:00pm',
      thursday: '7:30am-6:00pm',
      friday: '7:30am-4:30pm',
    },
    foodTypes: ["Coffee", "Sandwich", "Tea"],
    menus: [
      {
        name: 'Commodities',
        description: '',
        items: [
          {
            name: 'Club Wrap',
            description: '',
            price: '6.25'
          },
          {
            name: 'Veggie Wrap',
            description: '',
            price: '5.25'
          },
          {
            name: 'Cheese Melt',
            description: '',
            price: '3.65'
          },
          {
            name: 'Ham Melt',
            description: '',
            price: '4.65'
          },
          {
            name: 'Veggie Melt',
            description: '',
            price: '4.65'
          },
          {
            name: 'PB&J or PB&Nutella',
            description: '',
            price: '3.95'
          },
          {
            name: 'Turkey Bacon Club',
            description: '',
            price: '6.50'
          },
          {
            name: 'Roast Beef Original',
            description: '',
            price: '6.75'
          },
          {
            name: 'Southwest Chicken Wrap',
            description: '',
            price: '6.75'
          },
          {
            name: 'Tuna Sammy',
            description: '',
            price: '5.50'
          },
        ]
      },
      {
        name: 'Small Investments',
        description: '',
        items: [
          {
            name: 'Parfaits',
            description: '',
            price: '3.99'
          },
          {
            name: 'Cookies',
            description: '',
            price: '1.80'
          },
          {
            name: 'Scones',
            description: '',
            price: '2.95'
          },
          {
            name: 'Brownies',
            description: '',
            price: '2.95'
          },
          {
            name: 'Cereal',
            description: '',
            price: '2.50'
          },
          {
            name: 'Oatmeal',
            description: '',
            price: '3.95'
          },
          {
            name: 'Croissant',
            description: '',
            price: '2.75'
          },
          {
            name: 'Chocolate Croissant',
            description: '',
            price: '2.95'
          },
        ]
      },
      {
        name: 'The Business of Bagels',
        description: '',
        items: [
          {
            name: 'Flavored Cream Cheese',
            description: '',
            price: '3.50'
          },
          {
            name: 'Plain Cream Cheese',
            description: '',
            price: '3.00'
          },
          {
            name: 'Dry',
            description: '',
            price: '2.00'
          },
          {
            name: 'Nutella',
            description: '',
            price: '3.90'
          },
        ]
      },
      {
        name: 'Liquid Assets',
        description: '',
        items: [
          {
            name: 'Drop Coffee',
            description: '',
            price: 'S:1.30 M:1.59'
          },
          {
            name: 'Iced Coffee',
            description: '',
            price: 'S:1.50 M:1:80'
          },
          {
            name: 'Americano',
            description: '',
            price: 'S:2.90 M:3.45'
          },
          {
            name: 'Machiato',
            description: '',
            price: 'S:3.15 M:4.00'
          },
          {
            name: 'Caramel Mochiato',
            description: '',
            price: 'S:3.95 M:4.50'
          },
          {
            name: 'Cafe au Lait',
            description: '',
            price: 'S:2.10 M:3.50'
          },
        ]
      },
    ]
  },

  //Pizza Hut
  {
    name: 'Pizza Hut',
    location: 'Campus Center',
    latitude: 21.298246,
    longitude: -157.818495,
    image: 'le-crepe.jpg',
    description: "Pizza is always a go-to option when you can't decide what to have for lunch. Our Pizza Hut Express location has daily pan Pizza Hut Photo pizza specials, breadsticks, and the popular Wingstreet items! Six different sauces for the wings are offered, and you can even mix and match your favorites. Who knows, you might just create a combo so great, we'll add it to our menu!",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:00am-2:00pm',
      tuesday: '10:00am-2:00pm',
      wednesday: '10:00am-2:00pm',
      thursday: '10:00am-2:00pm',
      friday: '10:00am-2:00pm',
    },
    foodTypes: ["Pizza", "Wings"],
    menus: [
      {
        name: 'Personal Pan Pizza',
        description: '',
        items: [
          {
            name: 'Cheese',
            description: '',
            price: '3.89'
          },
          {
            name: 'Pepperoni',
            description: '',
            price: '4.19'
          },
          {
            name: 'Chicken Supreme',
            description: '',
            price: '4.09'
          },
          {
            name: 'Veggie Lovers',
            description: '',
            price: '4.09'
          },
          {
            name: 'Supreme',
            description: '',
            price: '4.59'
          },
        ]
      },
      {
        name: 'Appetizers',
        description: '',
        items: [
          {
            name: 'Cheese Breadsticks',
            description: '',
            price: '3.39'
          },
          {
            name: 'Breadsticks',
            description: '',
            price: '2.39'
          },
        ]
      },
      {
        name: 'Wings',
        description: 'Sauces: Naked, Garlic Paramesean, Honey BBQ, Spicy Asian, Buffalo Mild, Honey Siracha, Buffalo Hot',
        items: [
          {
            name: 'Traditional 7 Pieces',
            description: '',
            price: '7.99'
          },
          {
            name: 'Bone-Out 7 Pieces',
            description: '',
            price: '7.69'
          },
        ]
      },
      {
        name: 'Beverages',
        description: '',
        items: [
          {
            name: 'Small',
            description: '',
            price: '1.79'
          },
          {
            name: 'Medium',
            description: '',
            price: '2.09'
          },
          {
            name: 'Large',
            description: '',
            price: '2.19'
          },
        ]
      },
    ]
  },

  //Simply to Go
  {
    name: 'Simply-to-Go',
    location: 'Campus Center',
    latitude: 21.298471,
    longitude: -157.818942,
    image: 'le-crepe.jpg',
    description: "Simply To Go is just as the name says... simple items purchased to go! Skips the lines and come here to grab sandwiches, pastries, bottled beverages, and desserts while you're on the go. Simply To Go STG carries a variety of health food brands, such as Kashi, Kopali Organics and Bare Fruit Snacks. Local brands are also in stock, like manapua from Golden Coin and gelato made by La Gelateria -- both very popular with students! If you are early enough, be sure to grab some Andagi (Okinawan Doughnut) because we run out... FAST! ",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '8:00am-3:00pm',
      tuesday: '8:00am-3:00pm',
      wednesday: '8:00am-3:00pm',
      thursday: '8:00am-3:00pm',
      friday: '8:00am-3:00pm',
    },
    foodTypes: ["Sandwich", "Pastry", "Coffee"],
    menus: [
      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Coffee',
            description: '',
            price: 'S:1.79 M:1.99 L:2.29'
          },
          {
            name: 'Iced Coffee',
            description: '',
            price: 'M:1.99 L:2.29'
          },
          {
            name: 'Tazo Tea',
            description: '',
            price: 'S:1.69 M:1.99 L:1.99'
          },
          {
            name: 'Hot Chocolate',
            description: '',
            price: 'S:1.69 M:1.99 L:1.99'
          },
        ]
      },
      {
        name: 'Snacks',
        description: '',
        items: [
          {
            name: 'Apple',
            description: '',
            price: '0.99'
          },
          {
            name: 'Orange',
            description: '',
            price: '0.99'
          },
          {
            name: 'Yoplait Yogurt',
            description: '',
            price: '1.89'
          },
          {
            name: 'Greek Yogurt',
            description: '',
            price: '2.69'
          },
          {
            name: 'Andagi',
            description: '',
            price: '0.50'
          },
          {
            name: 'Angus Hot Dog',
            description: '',
            price: '4.99'
          },
          {
            name: 'Ham and Cheese',
            description: '',
            price: '4.99'
          },
          {
            name: 'Spinach & Feta Cheese',
            description: '',
            price: '4.99'
          },
        ]
      },
    ]
  },

  //Uahi Island grill
  {
    name: 'Uahi Island Grill',
    location: 'Kennedy Center',
    latitude: 21.299578,
    longitude: -157.814660,
    image: 'le-crepe.jpg',
    description: "Contemporary Cuisine, Vintage Aloha: Uahi Island Grill is a locally owned and operated contemporary local style plate lunch restaurant with a new twist on local cultures and favorites using high quality ingredients. They strive for local first for all their ingredients. All their fish is fresh and locally caught; all their beef is Hawai'i Island grass fed. Scratch-made sauces and dressing are sure winners.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:00am-2:00pm',
      tuesday: '10:00am-2:00pm',
      wednesday: '10:00am-2:00pm',
      thursday: '10:00am-2:00pm',
      friday: '10:00am-2:00pm',
    },
    foodTypes: ["Local", "Fish", "Curry"],
    menus: [
      {
        name: 'Salads',
        description: 'All salads include Waipoli greens, tomato, onion, cucumber, carrots, arare crunchies, and house-made miso dressing',
        items: [
          {
            name: 'Furikake chicken',
            description: '',
            price: '8.50'
          },
          {
            name: 'Fresh Shoyu Ahi Poke',
            description: '',
            price: '12.00'
          },
          {
            name: 'Furikake Tofu',
            description: '',
            price: '8.00'
          },
        ]
      },
      {
        name: 'Plate Lunches',
        description: 'All plate lunches are served with choice of brown or white rice and macaroni salad, kim chi or green papaya salad',
        items: [
          {
            name: 'Red Curry Chicken',
            description: '',
            price: '8.50'
          },
          {
            name: 'Sriracha Glazed Chicken',
            description: '',
            price: '8.50'
          },
          {
            name: 'Furikake Chicken',
            description: '',
            price: '8.50'
          },
          {
            name: 'Furikake Fish',
            description: '',
            price: '12.00'
          },
          {
            name: 'Sriracha Glazed Fish',
            description: '',
            price: '12.00'
          },
          {
            name: 'Red Curry Fish',
            description: '',
            price: '12.00'
          },
          {
            name: 'Furikake Tofu',
            description: '',
            price: '8.00'
          },
          {
            name: 'Sriracha Glazed Tofu',
            description: '',
            price: '8.00'
          },
          {
            name: 'Red Curry Tofu',
            description: '',
            price: '8.00'
          },
          {
            name: 'Kalua Pork with Kale',
            description: '',
            price: '8.50'
          },
          {
            name: 'Poke Bowl',
            description: '',
            price: '11.00'
          },
        ]
      },
      {
        name: 'Sandwiches',
        description: 'All sandwiches are served with chili aioli, lettuce, onion, cucumber, tomato, and carrots on a baguette',
        items: [
          {
            name: 'Furikake Grilled Chicken',
            description: '',
            price: '6.50'
          },
          {
            name: 'Sriracha Grilled Chicken',
            description: '',
            price: '6.50'
          },
          {
            name: 'Furikake Fish',
            description: '',
            price: '7.00'
          },
          {
            name: 'Sriacha Fish',
            description: '',
            price: '7.00'
          },
          {
            name: 'Furikake Tofu',
            description: '',
            price: '6.00'
          },
          {
            name: 'Sriracha Tofu',
            description: '',
            price: '6.00'
          },
          {
            name: 'Sriracha Grass-Fed Burger',
            description: '',
            price: '7.00'
          },
          {
            name: 'Teriyaki Grass-Fed Burger',
            description: '',
            price: '7.00'
          },
          {
            name: 'Kalua Pork',
            description: '',
            price: '6.50'
          },
        ]
      },
      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Soda and Bottled Water',
            description: '',
            price: '2'
          },
          {
            name: 'Thai Coffee',
            description: '',
            price: '3'
          },
          {
            name: 'Lilikoi Tea',
            description: '',
            price: '3'
          },
        ]
      },
    ]
  },

  //Hawaii's Fried Musubi
  {
    name: 'Hawaii\'s Fried Musubi',
    location: 'Holmes Hall (Monday, Wednesday, Friday) Krauss Hall (Tuesday, Thursday)',
    latitude: 21.297296,
    longitude: -157.816007,
    image: 'le-crepe.jpg',
    description: "Making quality food has always been Hawai'i's Fried Musubis' passion from the beginning. They transform island staples with a twist so they would become local favorites. Aside from their must try menu items such as their fried musubis, tempura mushrooms, and furikake sweet potato fries, they bring to you their mouth breaking open-faced panini's, ahi poke wraps & farmers salads. These menu items are healthier but still full-flavored. Hawai'i's Fried Musubis' open-faced paninis are flattened to a light crispy delicate perfection and their lettuce wraps are a fresh alternative to their fried musubi.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '10:00am-2:00pm',
      tuesday: '10:00am-2:00pm',
      wednesday: '10:00am-2:00pm',
      thursday: '10:00am-2:00pm',
      friday: '10:00am-2:00pm',
    },
    foodTypes: ["Musubi", "Local"],
    menus: [
      {
        name: 'Fried Musubis',
        description: '',
        items: [
          {
            name: 'Fried Spicy Bomb',
            description: '',
            price: '12.00'
          },
          {
            name: 'Fried Hawaiian Style Ahi',
            description: '',
            price: '12.00'
          },
          {
            name: 'Fried Classic Spam',
            description: '',
            price: '7.00'
          },
          {
            name: 'Daily/Weekly Specialty',
            description: '',
            price: '7.00-12.00'
          },
        ]
      },
      {
        name: 'Open Faced Paninis',
        description: '',
        items: [
          {
            name: 'Pesto Chicken Salad',
            description: 'with avocado',
            price: '8.50'
          },
          {
            name: 'Jalapeno Tuna Melt',
            description: '',
            price: '8.50'
          },
          {
            name: 'Three Cheese',
            description: 'with garlic',
            price: '7.00'
          },
          {
            name: 'Nutella and Bananas',
            description: 'with raw honey',
            price: '7.00'
          },
          {
            name: 'Daily/Weekly Specialty',
            description: '',
            price: '7.00-10.00'
          },
        ]
      },
      {
        name: 'Salads',
        description: '',
        items: [
          {
            name: 'Farmer Greens with Tuna',
            description: '',
            price: '8.50'
          },
          {
            name: 'Chicken Avocado with Pesto',
            description: '',
            price: '9.50'
          },
          {
            name: 'Ahi Poke Lettuce Wraps',
            description: 'with garlic rice',
            price: '10.50'
          },
        ]
      },
      {
        name: 'Drinks',
        description: '',
        items: [
          {
            name: 'Fuzzy Peach Gingerale',
            description: '',
            price: '4.00'
          },
          {
            name: 'Traditional Gingerale',
            description: '',
            price: '4.00'
          },
          {
            name: 'Island Favorite Gingerale',
            description: '',
            price: '4.00'
          },
          {
            name: 'Sunset Gingerale',
            description: '',
            price: '4.00'
          },
          {
            name: '100% Cold-Brewed Kona Coffee',
            description: 'Cold brewed for 16 hours',
            price: '4.00'
          },
          {
            name: 'House Special Creamy',
            description: 'Cold brew with house cream',
            price: '4.50'
          },
          {
            name: 'Kona Lava',
            description: 'Choco-black lava sea salt caramel and cream',
            price: '5.00'
          },
          {
            name: 'Iced Mojito Kona',
            description: 'Refreshing mix of local mints and cream',
            price: '5.00'
          },
        ]
      },
    ]
  },

  //DA Spot
  {
    name: 'Da Spot',
    location: 'Sustainability Courtyard',
    latitude: 21.298426,
    longitude: -157.817042,
    image: 'le-crepe.jpg',
    description: "Da Spot serves an all vegetarian menu of fresh health foods from around the globe, including Hawaiian, Egyptian, Mediterranean, European, & Asian gourmet foods.",
    reviews: [
      {
        user: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
        rating: 0,
      },
    ],
    favorite: [Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,

    ],
    hours: {
      monday: '8:30am-3:00pm',
      tuesday: '8:30am-3:00pm',
      wednesday: '8:30am-3:00pm',
      thursday: '8:30am-3:00pm',
      friday: '8:30am-3:00pm',
    },
    foodTypes: ["Smoothie", "Vegetarian"],
    menus: [
      {
        name: 'Smoothies',
        description: 'Small(16oz) 3.00  Medium(20oz) 3.50  Large(32oz) 4.00',
        items: [
          {
            name: 'Sweet Dream',
            description: 'Strawberries, Haupia, Sorbet, Soymilk',
            price: ''
          },
          {
            name: 'DaKine',
            description: 'Strawberries, Bananas, Lilikoi Sorbet, Passion Orange Juice',
            price: ''
          },
          {
            name: 'StarBerry',
            description: 'Strawberries, Lychee Sorbet, Guava Juice',
            price: ''
          },
          {
            name: 'StrawberryPotion',
            description: 'Strawberries, Bananas, Soymilk',
            price: ''
          },
          {
            name: 'VeryBerryGood',
            description: 'Strawberries, Mixberries, Bananas, Grape Juice',
            price: ''
          },
          {
            name: 'HomeGrown',
            description: 'Strawberries, Mixberries, Guava Sorbet, Guava Juice',
            price: ''
          },
          {
            name: 'Grenade',
            description: 'Strawberries, Pomegranate Sorbet, Grape Juice',
            price: ''
          },
          {
            name: 'SouthBerry',
            description: 'Strawberries, Mixberries, Acai & Haupia Sorbet, Guava Juice, Soymilk',
            price: ''
          },
          {
            name: 'AlohaBerry',
            description: 'Mixberries, Bananas, Haupia Sorbet, Guava Juice, Soymilk',
            price: ''
          },
          {
            name: 'Kalakauan',
            description: 'Mixberries, Bananas, Pomegranate Sorbet, Apple Juice',
            price: ''
          },
          {
            name: 'CocoOno',
            description: 'Bananas, Haupia Sorbet, Soymilk',
            price: ''
          },
          {
            name: 'LocoStyle',
            description: 'Bananas, Acai Sorbet, Soymilk',
            price: ''
          },
          {
            name: 'MangoTango',
            description: 'Mangoes, Bananas, Lilikoi Sorbet, Passion Orange & Lemon Juice',
            price: ''
          },
          {
            name: 'Mangolicious',
            description: 'Mangoes, Lychee Sorbet, Passion Orange Juice',
            price: ''
          },
          {
            name: 'DaMango',
            description: 'Mangoes, Haupia Sorbet, Orange Juice',
            price: ''
          },
          {
            name: 'Pinaco',
            description: 'Pineapples, Haupia Sorbet, Passion Orange Juice',
            price: ''
          },
          {
            name: 'PineParadise',
            description: 'Pineapples, Strawberries, Bananas, Apple Juice',
            price: ''
          },
          {
            name: 'OrangeSunset',
            description: 'Peaches, Lychee Sorbet, Passion Orange Juice',
            price: ''
          },
          {
            name: 'LiquidSunshine',
            description: 'Peaches, Pears, Acai Sorbet, Apple Juice',
            price: ''
          },
          {
            name: 'SunnySunrise',
            description: 'Pears, Pineapples, Lilikoi Sorbet, Orange Juice',
            price: ''
          },
          {
            name: 'LocoCoco',
            description: 'Pears, Haupia Sorbet, Soymilk',
            price: ''
          },
          {
            name: 'DaKeez',
            description: 'Kiwis, Strawberries, Bananas, Apple Juice',
            price: ''
          },
          {
            name: 'WaikiKiwi',
            description: 'Kiwi, Mango, Guava Sorbet, Guava Juice',
            price: ''
          },
          {
            name: 'MochaJava',
            description: 'Mocha, Haupia Sorbet, Brewed Coffee, Soymilk',
            price: ''
          },
          {
            name: 'Chocolatta',
            description: 'Chocolate, Bananas, Soymilk',
            price: ''
          },
          {
            name: 'PeanutButta',
            description: 'Peanut Butter, Haupia Sorbet, Soymilk',
            price: ''
          },
          {
            name: 'Queens',
            description: 'Peanut Butter, Bananas, Acai Sorbet, Soymilk',
            price: ''
          },
        ]
      },
      {
        name: 'Plates',
        description: 'Mini: 6.00 Regular: 8.00 Combo: 10.00.  All plates come with rice and salad.',
        items: [
          {
            name: 'Roasted Veggies',
            description: '',
            price: ''
          },
          {
            name: 'Veggie Chili',
            description: '',
            price: ''
          },
          {
            name: 'Malaysian',
            description: '',
            price: ''
          },
          {
            name: 'Thai Veggie Curry',
            description: '',
            price: ''
          },
          {
            name: 'Eggplant Parmesan',
            description: '',
            price: ''
          },
        ]
      },
    ]
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
