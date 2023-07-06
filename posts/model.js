import mongoose from "mongoose";
import { postSchema } from "./schema.js";

export const postModel = mongoose.model("posts", postSchema,"posts");