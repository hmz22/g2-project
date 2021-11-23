import mongoose from "mongoose";

const { Schema } = mongoose;

const mailSchema = new Schema({
    memberId : mongoose.Types.ObjectId, 
    mailaddress: String,
    status: Number,
  });
  
  export const MailModel = mongoose.model("mail", mailSchema);
  