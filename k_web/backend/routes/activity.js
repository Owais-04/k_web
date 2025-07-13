import express from 'express';
import {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity
} from '../controllers/activity.controller.js';

const router = express.Router({ mergeParams: true });

// GET all activities for a destination
router.get('/', getActivities);
// GET a single activity by ID
router.get('/:activityId', getActivityById);
// POST create a new activity
router.post('/', createActivity);
// PUT update an activity
router.put('/:activityId', updateActivity);
// DELETE an activity
router.delete('/:activityId', deleteActivity);

export default router; 