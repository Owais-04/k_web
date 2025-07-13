import express from 'express';
import {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity
} from '../controllers/activity.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true });

// GET all activities for a destination
router.get('/', getActivities);
// GET a single activity by ID
router.get('/:activityId', getActivityById);
// POST create a new activity (protected)
router.post('/', auth, createActivity);
// PUT update an activity (protected)
router.put('/:activityId', auth, updateActivity);
// DELETE an activity (protected)
router.delete('/:activityId', auth, deleteActivity);

export default router; 