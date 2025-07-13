import express from 'express';
import {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/restaurant.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true });

// GET all restaurants for a destination
router.get('/', getRestaurants);
// GET a single restaurant by ID
router.get('/:restaurantId', getRestaurantById);
// POST create a new restaurant (protected)
router.post('/', auth, createRestaurant);
// PUT update a restaurant (protected)
router.put('/:restaurantId', auth, updateRestaurant);
// DELETE a restaurant (protected)
router.delete('/:restaurantId', auth, deleteRestaurant);

export default router; 