import User from "../../models/User.js"

const accountExistsSignIn = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        console.log('exists middleware', user);
        if (user) {
            req.user = {
                id: user._id,
                email: user.email,
                name: user.name,
                password: user.password,
                image: user.image,
                online: user.online,
                verified: user.verified,
                // verified_code: user.verified_code,
                // role: user.role
            }
            return next()
        }
    } catch (error) {
        next(error)
    }

}

export default accountExistsSignIn;