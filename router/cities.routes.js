import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        cities: [
            {
                user: 'Kakaroto'
            },
            {
                user: 'Roshi master'
            },
            {
                user: 'Kami-sama'
            },
        ]
    })
});

export default router