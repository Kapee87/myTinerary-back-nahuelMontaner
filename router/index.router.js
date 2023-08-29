import express from 'express'
import userRouter from './users.router.js'
import citiesRouter from './cities.routes.js'
import itinerariesRouter from './itineraries.routes.js'
import activitiesRouter from './activities.router.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send(
        'myTinerary backend for data persistance'
    )
});

router.use('/users', userRouter)

router.use('/cities', citiesRouter)

router.use('/itineraries', itinerariesRouter)

router.use('/activities', activitiesRouter)

export default router