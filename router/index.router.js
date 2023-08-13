import express from 'express'
// import userRouter from './users.router.js'
import citiesRouter from './cities.routes.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send(
        'myTinerary backend for data persistance'
    )
});

// router.use('/users', userRouter)

router.use('/cities', citiesRouter)


export default router