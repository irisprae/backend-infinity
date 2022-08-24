/*
const express = require('express');
const ActivityModel = require('../models/activity');

const router = express.Router();

router.get('/', async (req, res) => {
    const activities = await ActivityModel.find();
    res.send(activities.map((act) => act.toJSON()));
});

router.get('/:activityId', async (req, res) => {
    console.log(req.params);
    const activity = await ActivityModel.findById(req.params.activityId);
    if (!activity) {
        res.json(activity.toJSON());
    }
    res.json(activity.toJSON());
    res.status(404).end();
});

router.post('/create', async (req, res) => {
    console.log('Body');
    console.log(req.body);
    const activity = new ActivityModel(req.body);
    const validateResult = activity.validateSync();
    if (validateResult) {
        return res.status(400).send(validateResult);
    }
    await activity.save();
    return res.send(activity.toJSON());
});

router.patch('/:activityId', async (req, res) => {
    try {
        const activityID = await ActivityModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send(activityID);
    } catch(error){
        console.log(error)

    };
});

router.delete('/:activityId', async(req, res) => {
    try {
        const activityID = await ActivityModel.findByIdAndDelete(req.params.id)
        res.status(200).send(activityID);
    } catch (error) {
        console.log(error)

    };
});

module.exports = router;

*/
