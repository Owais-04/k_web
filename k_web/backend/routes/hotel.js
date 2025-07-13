import express from 'express';
import {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel
} from '../controllers/hotel.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true });

// GET all hotels for a destination
router.get('/', getHotels);
// GET a single hotel by ID
router.get('/:hotelId', getHotelById);
// POST create a new hotel (protected)
router.post('/', auth, createHotel);
// PUT update a hotel (protected)
router.put('/:hotelId', auth, updateHotel);
// DELETE a hotel (protected)
router.delete('/:hotelId', auth, deleteHotel);

export default router; 