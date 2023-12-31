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
            returnnext(error)
        }
    },
    getCitiesById: async (req, res) => {

        try {
            const getCitieById = await City.findById(req.params.id)
                .populate({
                    path: 'itineraries',
                    populate: [
                        { path: 'activities' },
                        { path: 'comments', populate: 'user' },
                        { path: 'user' }]
                })
            return res.status(200).json({
                success: true,
                Cities: getCitieById
            })
        } catch (error) {
            return next(error)
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
            returnnext(error)
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
            return next(error)
        }
    },
    updateCity: async (req, res) => {
        try {
            const updateCityArray = await City.findOneAndUpdate(req.params.id, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'City updated',
                updateCityArray
            })
        } catch (error) {
            return next(error)
        }
    }
}

export default controller;