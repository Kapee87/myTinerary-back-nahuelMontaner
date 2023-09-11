import User from "../models/User.js"

const isAdmin = async (req, res, next) => {
    try {
        const { role } = await User.findById(req.query.userId)

        if (role == 'admin') {
            return next()
        }
        return res.status(401).json({
            success: false,
            message: 'Unauthorized user for request'
        })

    } catch (error) {
        next(error)
    }
}

export default isAdmin