import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const Schema = mongoose.Schema;

const tilSchema = new Schema({
    _id: ObjectId,
    userId: ObjectId,
    date: String,
    comment: String,
    feels: Number,
    tags: [String]
});

const Til = mongoose.model("til", tilSchema);
export default Til;
