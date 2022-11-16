import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  phone: String,
});

const User = mongoose.model("user", userSchema);
export default User;
