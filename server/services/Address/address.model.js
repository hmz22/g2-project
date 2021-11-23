import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
  memberId: mongoose.Types.ObjectId,
  address: String,
  status: Number,
});

export const AddressModel = mongoose.model("addresses", addressSchema);
