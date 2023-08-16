import Cities from "../models/Cities.js"

const controller = {
    getCities: async (req, res) => {

        /* filtros?

         let queries = {}

        if (req.query.name) {
            queries.name = {name: new RegExp(`^${req.query.name}`,'i')}
        }
        if (req.query.country) {
            queries.country = {country: new RegExp(`^${req.query.country}`,'i')}
        }

        */

        try {
            // el find no es igual al de js, este es de mongoose
            const getCities = await Cities.find()

            if (getCities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: getCities// tmb se puede dejar solo getCities
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
            const getCitieById = await Cities.findById(req.params.id)
            return res.status(200).json({
                success: true,
                cities: getCitieById
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retieving data'
            })
        }
    },
    createCity: async (req, res) => {
        try {
            const newCity = await Cities.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating the city',
                error: error,
                body: req.body
            })
        }
    },
    deleteCity: async (req, res) => {
        try {
            const deleteCity = await Cities.findByIdAndDelete(req.params.id)
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
            const updateCityArray = await Cities.findByIdAndUpdate(req.params.id, req.body, { new: true })
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