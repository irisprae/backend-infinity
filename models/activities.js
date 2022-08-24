const mongoose = require("mongoose");

const activitiesSchema = mongoose.Schema(
  {
    title: { type: String, min: 5, max: 20, required: true },
    activity: { type: String, enum: ['Boxing', 'Cycling', 'Dancing', 'Hiking', 'Running', 'Swimming', 'Walking', 'Yoga'], required: true },
    distance: { type: Number, min: 0},
    date: { type: Date, required: true },
    duration: { type: Number, required: true }, // in second 600 = 10 min
    calories: { type: Number, min: 0},
    heartrate: { type: Number, min: 0},
    description: { type: String, min: 0, max: 1000 }
  },
  {
    versionKey: false,
  }
);

const activitiesModels = mongoose.model("activities", activitiesSchema);

module.exports = activitiesModels;