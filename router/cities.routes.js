import express from 'express'
import citiesControler from '../controllers/cities.controller.js';


const router = express.Router();

router.get('/', citiesControler.getCities);
router.get('/:id', citiesControler.getCitiesById);
router.post('/', citiesControler.createCity);

export default router