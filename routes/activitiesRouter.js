const express = require('express');
const activitiesRouter = express.Router();

const activity = require('../controller/activitiesController');

activitiesRouter.get('/', activity.get_allAct);
activitiesRouter.get('/:activityId', activity.get_soloAct);
activitiesRouter.post('/create', activity.create_Act);
activitiesRouter.patch('/:activityId', activity.edit_Act);
activitiesRouter.delete('/:activityId', activity.delete_Act);

module.exports = activitiesRouter;