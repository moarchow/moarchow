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
    latitude: 21.296527,
    longitude: -157.818289,
    image: 'le-crepe.jpg',
    description: "Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. They specialize in a flavorsome menu of sweet and savory crêpes and use fresh ingredients, organic when possible. Their utensils are even bio-compostable. Enjoy a crêpe any time of day, as a breakfast, snack, main course, or dessert - close your eyes and you're in Paris!",
    hours: {
      monday: '8:00am-2:00pm',
      tuesday: '8:00am-2:00pm',
      wednesday: '8:00am-2:00pm',
      thursday: '8:00am-2:00pm',
      friday: '8:00am-2:00pm',
    },
    foodTypes: ["French", "Coffee", "Dessert"],
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

  //Bale
  {
    name: 'Bale',
    location: 'Hemenway Hall',
    latitude: 21.298828,
    longitude: -157.819636,
    image: 'le-crepe.jpg',
    description: "Deliciously healthy Vietnamese cuisine, local favorites, fresh baked French rolls and huge, flaky croissants at affordable prices that everyone can enjoy!",
    hours: {
      monday: '10:00am-8:00pm',
      tuesday: '10:00am-8:00pm',
      wednesday: '10:00am-8:00pm',
      thursday: '10:00am-8:00pm',
      friday: '10:00am-8:00pm',
    },
    foodTypes: ["Vietnamese", "Sandwiches", "Dessert", "Salads", "Asian"],
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

  //
  {
    name: 'Manoa Garden',
    location: 'Hemenway Hall',
    latitude: 21.298828,
    longitude: -157.819636,
    image: 'le-crepe.jpg',
    description: "The university's only watering hole!",
    hours: {
      monday: '12:00pm-7:30pm',
      tuesday: '12:00pm-7:30pm',
      wednesday: '12:00pm-7:30pm',
      thursday: '12:00pm-7:30pm',
      friday: '12:00pm-8:30pm',
    },
    foodTypes: ["Alochol", "Drinks"],
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

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Vendors.find().count() === 0) {
  _.each(vendorSeeds, function seedVendors(vendor) {
    Vendors.insert(vendor);
  });
}
