import express from 'express'
import ActivityController from '../controllers/activities.controller.js'

const router = express.Router();

const { getActivities, getActivityById, createActivity, updateActivity, deleteActivity } = ActivityController

router.get('/', getActivities);

router.get('/:id', getActivityById);

router.post('/', createActivity);

router.delete('/:id', deleteActivity);

router.put('/:id', updateActivity);


export default router