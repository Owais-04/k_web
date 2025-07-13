import express from 'express';
import {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel
} from '../controllers/hotel.controller.js';

const router = express.Router({ mergeParams: true });

// GET all hotels for a destination
router.get('/', getHotels);
// GET a single hotel by ID
router.get('/:hotelId', getHotelById);
// POST create a new hotel
router.post('/', createHotel);
// PUT update a hotel
router.put('/:hotelId', updateHotel);
// DELETE a hotel
router.delete('/:hotelId', deleteHotel);

export default router; 