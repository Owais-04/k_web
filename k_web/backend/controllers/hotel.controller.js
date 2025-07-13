import Hotel from '../models/hotel.model.js';

export const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find({ destination: req.params.destinationId });
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findOne({ _id: req.params.hotelId, destination: req.params.destinationId });
        if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
        res.json(hotel);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createHotel = async (req, res) => {
    try {
        const hotel = new Hotel({ ...req.body, destination: req.params.destinationId });
        await hotel.save();
        res.status(201).json(hotel);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findOneAndUpdate(
            { _id: req.params.hotelId, destination: req.params.destinationId },
            req.body,
            { new: true }
        );
        if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
        res.json(hotel);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data', details: err.message });
    }
};

export const deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findOneAndDelete({ _id: req.params.hotelId, destination: req.params.destinationId });
        if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
        res.json({ message: 'Hotel deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}; 