import mongoose from "mongoose";

const { Schema } = mongoose;

const phoneSchema = new Schema({
  memberId: mongoose.Types.ObjectId,
  phoneType: Number,
  phone: String,
  status: Number,
});

export const PhoneModel = mongoose.model("phones", phoneSchema);
