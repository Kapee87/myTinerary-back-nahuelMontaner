import Cities from "../models/Cities.js"

const controller = {
    getCities: async (req, res) => {
        try {
            // el find no es igual al de js, este es de mongoose
            const getCities = await Cities.find()

            return res.status(200).json({
                success: true,
                cities: getCities// tmb se puede dejar solo getCities
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
                message: 'Error retieving data',
                error: error,
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
                message: 'Error creating the city'
            })
        }
    },
    deleteCity: () => { },
}

export default controller;