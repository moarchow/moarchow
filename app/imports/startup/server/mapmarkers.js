import { MapMarkers } from '../../api/mapmarkers/mapmarkers.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Menu Items to pre-fill the Menus Collection.
 * @type {*[]}
 */
const mapmarkersSeeds = [
  {
    lat: 21.298974,
    long:  -157.817600,
  },
  {
    lat: 21.299553,
    long:   -157.814652,
  },
  {
    lat: 21.29734,
    long:  -157.816006,
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (MapMarkers.find().count() != 3) {
  _.each(mapmarkersSeeds, function seedMarkers(markers) {
    MapMarkers.insert(markers);
  });
}
