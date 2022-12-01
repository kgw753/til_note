import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    _id: ObjectId,
    userId: ObjectId,
    date: String,
    comment: String,
    isDone: Boolean
});

const Todo = mongoose.model("todo", todoSchema);
export default Todo;
