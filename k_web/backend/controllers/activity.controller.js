import Activity from '../models/activity.model.js';

export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ destination: req.params.destinationId });
        res.json(activities);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findOne({ _id: req.params.activityId, destination: req.params.destinationId });
        if (!activity) return res.status(404).json({ error: 'Activity not found' });
        res.json(activity);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createActivity = async (req, res) => {
    try {
        const activity = new Activity({ ...req.body, destination: req.params.destinationId });
        await activity.save();
        res.status(201).json(activity);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const updateActivity = async (req, res) => {
    try {
        const activity = await Activity.findOneAndUpdate(
            { _id: req.params.activityId, destination: req.params.destinationId },
            req.body,
            { new: true }
        );
        if (!activity) return res.status(404).json({ error: 'Activity not found' });
        res.json(activity);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findOneAndDelete({ _id: req.params.activityId, destination: req.params.destinationId });
        if (!activity) return res.status(404).json({ error: 'Activity not found' });
        res.json({ message: 'Activity deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}; 