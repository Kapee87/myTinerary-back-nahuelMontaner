import Activity from "../models/Activity.js";

const controller = {
    getActivities: async (req, res) => {

        try {
            // el find no es igual al de js, este es de mongoose
            const getActivities = await Activity.find()
            if (getActivities.length > 0) {
                return res.status(200).json({
                    success: true,
                    activities: getActivities// tmb se puede dejar solo getActivities
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Activities not found'
            })

        } catch (error) {
            return next(error)
        }
    },
    getActivityById: async (req, res) => {

        try {
            const getActivityById = await Activity.findById(req.params.id)
            return res.status(200).json({
                success: true,
                activity: getActivityById
            })
        } catch (error) {
            return next(error)
        }
    },
    createActivity: async (req, res) => {
        console.log(req.body);
        try {
            const newActivity = await Activity.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'Activity created'
            })
        } catch (error) {
            return next(error)
        }
    },
    deleteActivity: async (req, res) => {
        try {
            const deleteActivity = await Activity.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'Activity deleted'
            })
        } catch (error) {
            return next(error)
        }
    },
    updateActivity: async (req, res) => {
        try {
            const updateActivityArray = await Activity.findOneAndUpdate(req.params.id, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'Activity updated',
                updateActivityArray
            })
        } catch (error) {
            return next(error)
        }
    }
}

export default controller;