const activities = require('../models/activities');


const get_allAct = async (req, res) => {
    const act = await activities.find();
    if (!act) {
        res.status(404).send("Not found, the resource does not exist");
    }
    res.send(act);
};

// ดึง activity มา 1 อัน
const get_soloAct = async (req, res) => {
    const Act = await activities.findById(req.params.activityId);
    if (!Act) {
        res.status(404).send("Not found, the resource does not exist");
    }
    res.send(Act);
};

// สร้าง activity
const create_Act = async (req, res) => {
    const act = await activities.create({
        title: req.body.title,
        activity: req.body.activity,
        distance: req.body.distance,
        date: req.body.date,
        duration: req.body.duration,
        calories: req.body.calories,
        heartrate: req.body.heartrate,
        description: req.body.description,
    });

    if (!act) {
        return res.status(400).send('Bad request')
    }
    await act.save();
    res.send(act)
}

const edit_Act = async (req, res) => {
    const Act = await activities.findByIdAndUpdate(
        req.params.activityId,
        req.body, { new: true }
    );
    if (!Act) {
        res.status(404).send("Not found, the resource does not exist");
    }
    res.status(200).json(edit_Act);
};

const delete_Act = async (req, res) => {
    const Act = await activities.findByIdAndDelete(req.params.activityId);
    if (!Act) {
        res.status(404).send("Not found, the resource does not exist");
    }
    res.status(204).send("Delete an activity");
};

module.exports = {
    get_allAct,
    get_soloAct,
    create_Act,
    edit_Act, delete_Act,
}