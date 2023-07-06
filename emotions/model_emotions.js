import mongoose from "mongoose";
import { emotionsSchema } from "./schema_emotions.js";

export const emotionsModel = mongoose.model("emotions", emotionsSchema);