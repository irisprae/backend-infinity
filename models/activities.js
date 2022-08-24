/*
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
    {
        title: { type: String, min: 5, max: 20, required: true },
        image: { type: String, min: 0, max: 10000, required: true },
        type: { type: String, enum: ['Running', 'Swimming', 'Hiking', 'Biking'], required: true },
        date: { type: Date, required: true },
        duration: { type: Number, required: true }, // in second 600 = 10 min
        description: { type: String, min: 0, max: 100 },
    },
    {
        statics: {
            findByType: async function (type) {
                return this.find({ type });
            },
        },
    }
);

const ActivityModel = mongoose.model('activity', activitySchema);

module.exports = ActivityModel;
*/

const mongoose = require("mongoose");

const activitiesSchema = mongoose.Schema(
    {
        title: { type: String, min: 5, max: 20, required: true },
        activity: { type: String, enum: ['Boxing', 'Cycling', 'Dancing', 'Hiking', 'Running', 'Swimming', 'Walking', 'Yoga'], required: true },
        distance: { type: Number, min: 0 },
        date: { type: Date, required: true },
        duration: { type: Number, required: true }, // in second 600 = 10 min
        calories: { type: Number, min: 0 },
        heartrate: { type: Number, min: 0 },
        description: { type: String, min: 0, max: 1000 }
    },
    {
        versionKey: false,
    }
);

const activitiesModels = mongoose.model("activities", activitiesSchema);

module.exports = activitiesModels;