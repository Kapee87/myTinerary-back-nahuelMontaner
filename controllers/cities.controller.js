import City from "../models/City.js"

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if (req.query.city) {
            queries.city = new RegExp(`^${req.query.city}`, 'i')
        }
        if (req.query.country) {
            queries.country = new RegExp(`^${req.query.country}`, 'i')
        }

        try {
            // el find no es igual al de js, este es de mongoose
            const getCities = await City.find(queries)

            if (getCities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: getCities,// tmb se puede dejar solo getCities
                })
            }
            return res.status(404).json({
                success: false,
                message: 'cities not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retieving data',
                error: error,
            })
        }
    },
    getCitiesById: async (req, res) => {

        try {
            const getCitieById = await City.findById(req.params.id)
                //a implementar más adelante
                .populate({
                    path: 'itineraries',
                    populate: {
                        path: 'activities',
                        path: 'comments',
                        path: 'comments',
                        path: 'user'
                    }
                })
            return res.status(200).json({
                success: true,
                Cities: getCitieById
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retieving data',
                error: error
            })
        }
    },
    createCity: async (req, res) => {
        try {
            const newCity = await City.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating the city',
                error: error
            })
        }
    },
    deleteCity: async (req, res) => {
        try {
            const deleteCity = await City.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'City deleted'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting the city'
            })
        }
    },
    updateCity: async (req, res) => {
        try {
            const updateCityArray = await City.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'City updated',
                updateCityArray
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error updating the city'
            })
        }
    }
}

export default controller;