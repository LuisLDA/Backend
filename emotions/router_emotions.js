import express from "express";
import {emotionsModel} from "./model_emotions.js";

export const emotionsRouter = express.Router();

//CRUD operations

//CREATE
emotionsRouter.post("/", async (req, res) => {
    try {
        const emotion = new emotionsModel(req.body);
        const createdEmotion = await emotion.save();
        res.status(201).json(createdEmotion);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Read all
emotionsRouter.get("/", async (req, res) => {
    console.log("GET /emotions");
    try {
        const emotions = await emotionsModel.find({}).sort({ date: -1 }).limit(10);
        console.log("Emotions: "+ emotions)
        res.status(200).json(emotions);
        console.log("GET /emotions OK");
    } catch (error) {
        res.status(500).json({ error: error });
        console.log("GET /emotions ERROR");
        console.log(error);
    }
});

//Update
emotionsRouter.put("/:id", async (req, res) => {
    try {
        const emotion = await emotionsModel.findById(req.params.id);
        if (emotion) {
            emotion.text = req.body.text;
            emotion.sentiment = req.body.sentiment;
            emotion.emotions = req.body.emotions;
            emotion.topic = req.body.topic;

            const updatedEmotion = await emotion.save();
            res.status(200).json(updatedEmotion);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Delete

emotionsRouter.delete("/:id", async (req, res) => {
    try {
        const emotion = await emotionsModel.findById(req.params.id);
        if (emotion) {
            await emotion.remove();
            res.status(200).json({ message: "Emotion removed" });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
});