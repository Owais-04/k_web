import express from 'express';
import {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} from '../controllers/destination.controller.js';
import hotelRouter from './hotel.js';
import restaurantRouter from './restaurant.js';
import activityRouter from './activity.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Nested routes for hotels, restaurants, activities
router.use('/:destinationId/hotels', hotelRouter);
router.use('/:destinationId/restaurants', restaurantRouter);
router.use('/:destinationId/activities', activityRouter);

// GET all destinations
router.get('/', getAllDestinations);
// GET a single destination by ID
router.get('/:id', getDestinationById);
// POST create a new destination (protected)
router.post('/', auth, createDestination);
// PUT update a destination (protected)
router.put('/:id', auth, updateDestination);
// DELETE a destination (protected)
router.delete('/:id', auth, deleteDestination);

export default router; 