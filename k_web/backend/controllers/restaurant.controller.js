import Restaurant from '../models/restaurant.model.js';

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ destination: req.params.destinationId });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({ _id: req.params.restaurantId, destination: req.params.destinationId });
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant({ ...req.body, destination: req.params.destinationId });
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOneAndUpdate(
            { _id: req.params.restaurantId, destination: req.params.destinationId },
            req.body,
            { new: true }
        );
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json(restaurant);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOneAndDelete({ _id: req.params.restaurantId, destination: req.params.destinationId });
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json({ message: 'Restaurant deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}; 