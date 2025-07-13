import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    contact: { type: String },
    pricePerNight: { type: Number },
    images: [{ type: String }],
    destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel; 