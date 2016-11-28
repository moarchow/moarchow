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

  //Manoa Garden
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

  //The Curb
  {
    name: 'The Curb',
    location: 'Paradise Palms',
    latitude: 21.300670,
    longitude: -157.815674,
    image: 'le-crepe.jpg',
    description: "The Curb seeks to inspire, to caffeinate, and to expand the coffee horizons of the campus population! Popular as a food truck and now a regular in the Paradise Palms food court, The Curb is known for their coffees sourced from farms throughout the state and roasted at Honolulu’s Downtown Coffee. Each week, they also offer a special microlot or single origin coffee from around the world roasted by Dillanos Coffee Roasters, 2011 Roast Magazine Roaster of the Year.  A daily variety of fresh pastries, vegetarian sandwiches, teas and other beverages, plus shave ice, round out the menu of this quirky favorite.",
    hours: {
      monday: '7:00am-6:00pm',
      tuesday: '7:00am-6:00pm',
      wednesday: '7:00am-6:00pm',
      thursday: '7:00am-6:00pm',
      friday: '7:00am-5:00pm',
    },
    foodTypes: ["Coffee", "Drinks", "Tea"],
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
    ]
  },

  //India Cafe
  {
    name: 'India Cafe',
    location: 'Paradise Palms',
    latitude: 21.300670,
    longitude: -157.815674,
    image: 'le-crepe.jpg',
    description: "India Café offers something for everyone with their signature exotic South Indian and Malaysian cuisine. Daily specials include chicken curry, lamb masala, garlic shrimp, seafood curry, spinach tofu, spicy eggplant, curried potatoes, coconut cabbage & over 10 different vegetarian entrees to choose from. Spiciness ranges from mild to very hot.",
    hours: {
      monday: '10:30am-4:00pm',
      tuesday: '10:30am-4:00pm',
      wednesday: '10:30am-4:00pm',
      thursday: '10:30am-4:00pm',
      friday: '10:30am-4:00pm',
    },
    foodTypes: ["Indian", "Curry", "Malaysian"],
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
    latitude: 21.300670,
    longitude: -157.815674,
    image: 'le-crepe.jpg',
    description: "Greek-style meat or vegetarian pita sandwiches, salads, smoothies, and more are quick, fresh, and healthy. The perfectly seasoned lamb and beef are cooked on a traditional vertical broiler, locking in flavor and rendering out fats.",
    hours: {
      monday: '10:30am-4:00pm',
      tuesday: '10:30am-4:00pm',
      wednesday: '10:30am-4:00pm',
      thursday: '10:30am-4:00pm',
      friday: '10:30am-4:00pm',
    },
    foodTypes: ["Greek", "Gyros"],
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
    latitude: 21.300670,
    longitude: -157.815674,
    image: 'le-crepe.jpg',
    description: "Panda Express serves gourmet Chinese food made with only the freshest ingredients. Famous for its Orange Chicken, they also offer a number of Wok Smart entrées that contain less than 250 calories per serving, such as Shanghai Angus Steak, Kung Pao Chicken, and Broccoli Beef. Other favorites include Beijing Beef, Sweetfire Chicken Breast, and Honey Walnut Shrimp.",
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
    name: 'Domino\s Express',
    location: 'Paradise Palms',
    latitude: 21.300670,
    longitude: -157.815674,
    image: 'le-crepe.jpg',
    description: "Domino's Express brings you their well-known, tasty pizzas at a quick and convenient counter in the Paradise Palms food court. They’re dedicated to providing quality products and professional customer service to make your UH experience even more enjoyable. From a single slice to a hundred pizzas for the team, Domino’s has got you covered!",
    hours: {
      monday: '10:00am-4:00pm',
      tuesday: '10:00am-4:00pm',
      wednesday: '10:00am-4:00pm',
      thursday: '10:00am-4:00pm',
      friday: '10:00am-4:00pm',
    },
    foodTypes: ["Pizza"],
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
    hours: {
      monday: '7:30am-6:00pm',
      tuesday: '7:30am-6:00pm',
      wednesday: '7:30am-6:00pm',
      thursday: '7:30am-6:00pm',
      friday: '7:30am-4:30pm',
    },
    foodTypes: ["Coffee", "Sandwiches", "Tea"],
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

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Vendors.find().count() === 0) {
  _.each(vendorSeeds, function seedVendors(vendor) {
    Vendors.insert(vendor);
  });
}
