import Destination from '../models/destination.model.js';

export const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) return res.status(404).json({ error: 'Destination not found' });
        res.json(destination);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createDestination = async (req, res) => {
    try {
        const destination = new Destination(req.body);
        await destination.save();
        res.status(201).json(destination);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!destination) return res.status(404).json({ error: 'Destination not found' });
        res.json(destination);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndDelete(req.params.id);
        if (!destination) return res.status(404).json({ error: 'Destination not found' });
        res.json({ message: 'Destination deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}; 