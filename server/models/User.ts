import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: ObjectId,
  name: String,
  type: String,
  authToken: String
});

const User = mongoose.model("user", userSchema);
export default User;
