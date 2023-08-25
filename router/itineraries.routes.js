import express from 'express'
import itineraryController from '../controllers/itineraries.controller.js';

const router = express.Router();

const { getItineraries, getItinerariesById, createItinerary, updateItinerary, deleteItinerary } = itineraryController

router.get('/', getItineraries);

router.get('/:id', getItinerariesById);

router.post('/', createItinerary);

router.delete('/:id', deleteItinerary);

router.put('/:id', updateItinerary);


export default router