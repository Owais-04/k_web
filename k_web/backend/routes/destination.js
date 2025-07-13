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

const router = express.Router();

// Nested routes for hotels, restaurants, activities
router.use('/:destinationId/hotels', hotelRouter);
router.use('/:destinationId/restaurants', restaurantRouter);
router.use('/:destinationId/activities', activityRouter);

// GET all destinations
router.get('/', getAllDestinations);
// GET a single destination by ID
router.get('/:id', getDestinationById);
// POST create a new destination
router.post('/', createDestination);
// PUT update a destination
router.put('/:id', updateDestination);
// DELETE a destination
router.delete('/:id', deleteDestination);

export default router; 