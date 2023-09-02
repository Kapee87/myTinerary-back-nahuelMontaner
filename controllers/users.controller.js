import User from "../models/User.js"

const controller = {
    getUsers: async (req, res) => {
        try {
            // el find no es igual al de js, este es de mongoose
            const getUsersArray = await User.find()

            if (getUsersArray.length > 0) {
                return res.status(200).json({
                    success: true,
                    User: getUsersArray// tmb se puede dejar solo getUsers
                })
            }
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retieving data',
                error: error,
            })
        }
    },
    getUserById: async (req, res) => {

        try {
            const getUserById = await User.findById(req.params.id)
            return res.status(200).json({
                success: true,
                user: getUserById
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retieving data',
                error: error,
            })
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'User created'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating the User',
                error: error
            })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'User deleted'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting the city'
            })
        }
    },
    updateUser: async (req, res) => {
        try {
            const updateUserArray = await User.findOneAndUpdate(req.params.id, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'User updated',
                updateUserArray
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error updating the User'
            })
        }
    }
}

export default controller;
