import Itinerary from '../models/Itinerary.js'

const controller = {
    getItineraries: async (req, res) => {

        try {
            // el find no es igual al de js, este es de mongoose
            const getItineraries = await Itinerary.find().populate('user')

            if (getItineraries.length > 0) {
                return res.status(200).json({
                    success: true,
                    itineraries: getItineraries// tmb se puede dejar solo getItineraries
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Itineraries not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retieving data',
                error: error,
            })
        }
    },
    getItinerariesById: async (req, res) => {

        try {
            const getItineraryById = await Itinerary.findById(req.params.id)
            return res.status(200).json({
                success: true,
                itinerary: getItineraryById
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retieving data'
            })
        }
    },
    createItinerary: async (req, res) => {
        console.log(req.body);
        try {
            const newItinerary = await Itinerary.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'Itinerary created'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating the Itinerary',
                error: error
            })
        }
    },
    deleteItinerary: async (req, res) => {
        try {
            const deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'Itinerary deleted'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting the Itinerary'
            })
        }
    },
    updateItinerary: async (req, res) => {
        try {
            const updateItineraryArray = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'Itinerary updated',
                updateItineraryArray
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error updating the Itinerary'
            })
        }
    }
}

export default controller;