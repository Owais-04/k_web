import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    contact: { type: String },
    cuisine: { type: String },
    images: [{ type: String }],
    destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant; 