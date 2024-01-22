// const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Document = mongoose.Document;

import mongoose from "mongoose";

const userSchema = new Schema({
  // regid: { type: String, required: true, unique: true },
  // name: { type: String, required: true },
  // password: { type: String, required: true },
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

// module.exports = User;

export default User;

// const mongoose = require("mongoose");

// new mongoose.Schema(
//     name: String,
//     email: String
// )

// module.exports = mongoose.model('User', userSchema);

// // import mongoose, { Schema, Document } from "mongoose";

// // interface IUser extends Document {
// //   name: string;
// //   email: string;
// // }

// // const userSchema: Schema = new Schema({
// //   name: String,
// //   email: String,
// // });

// // export default mongoose.model<IUser>("User", userSchema);
