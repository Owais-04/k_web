import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String }, // e.g., trekking, sightseeing
    price: { type: Number },
    images: [{ type: String }],
    destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Activity = mongoose.model('Activity', activitySchema);
export default Activity; 