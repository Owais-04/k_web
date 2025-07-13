import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    category: { type: String, required: true }, // e.g., nature, heritage, adventure
    highlights: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;