import mongoose from "mongoose";

const { Schema } = mongoose;

const photoSchema = new Schema({
    memberId: mongoose.Types.ObjectId,
    photoname: String,
    status: Number,
});

export const PhotoModel = mongoose.model("photo", photoSchema);