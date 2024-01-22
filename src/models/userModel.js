import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Std_Id: { type: String, required: true, unique: true, integer: true },
  Std_Name: { type: String, required: true },
  Std_Reg_No: { type: Number, required: true, unique: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true, unique: true },
  Batch: { type: Number, required: true },
  Section: { type: String, required: true },
  Role: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
