import express from 'express'
import citiesController from '../controllers/cities.controller.js';

const router = express.Router();

const { getCities, getCitiesById, createCity, updateCity, deleteCity } = citiesController

router.get('/', getCities);

router.get('/:id', getCitiesById);

router.post('/', createCity);

router.delete('/:id', deleteCity);

router.put('/:id', updateCity);


export default router