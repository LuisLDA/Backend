/*
Schema for this json object:
    {
        "_id" : {"$oid":"640b9a418a696d81c980d987"},
        "text" : "@ArielAl68787056 @mariajosetorr53 @Fernand55898112 @LassoGuillermo El Ladronasso le roba al país,saquea la economía y sigue subiendo el precio de la gasolina hay que sacar a ese evasor",
        "sentiment" : "negativo",
        "emotions" : "ira",
        "topic" : "economía"
    }
*/

import mongoose from "mongoose";

export const emotionsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    sentiment: String,
    emotions: String,
    topic: String,
});