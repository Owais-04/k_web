import express from 'express';
import {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/restaurant.controller.js';

const router = express.Router({ mergeParams: true });

// GET all restaurants for a destination
router.get('/', getRestaurants);
// GET a single restaurant by ID
router.get('/:restaurantId', getRestaurantById);
// POST create a new restaurant
router.post('/', createRestaurant);
// PUT update a restaurant
router.put('/:restaurantId', updateRestaurant);
// DELETE a restaurant
router.delete('/:restaurantId', deleteRestaurant);

export default router; 