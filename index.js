import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import { emotionsRouter } from "./emotions/router_emotions.js";

import { postRouter } from "./posts/router.js";


const { MONGO_PORT, MONGO_HOSTNAME } = process.env;
const MONGO_URI = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;
const app = express();

// Global Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is running"));
app.use("/emotions", emotionsRouter);
app.use("/posts", postRouter);


app.listen(PORT, () => {
    console.log(`🌍 Server running on port http://localhost:${PORT}`);
    console.log(`🌍 Mongo running on port ${MONGO_PORT}`);
    //Print Mongo URI
    console.log(`🌍 Mongo URI: ${MONGO_URI}`);
    mongoose.connect(MONGO_URI, {
        dbName: "emotions",
    }).then(() => {
        console.log("🌍 Mongo connected");
    }).catch((err) => {
        console.log("🌍 Mongo connection failed");
        console.log(err);
    });
});