import express from 'express'
import citiesController from '../controllers/cities.controller.js';
import passport from '../middlewares/passport.js';
import isAdmin from '../middlewares/isAdmin.middleware.js'

const router = express.Router();

const { getCities, getCitiesById, createCity, updateCity, deleteCity } = citiesController

router.get('/', getCities);

router.get('/:id', getCitiesById);

router.post('/', passport.authenticate('jwt', { session: false }), isAdmin, createCity);

router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin, deleteCity);

router.put('/:id', passport.authenticate('jwt', { session: false }), isAdmin, updateCity);


export default router