
const accountHasBeenVerified = async (req, res, next) => {
    console.log('been verified middleware');
    try {
        if (req.user.verified) {
            return next()
        }
    } catch (error) {
        return next(error)
    }
}

export default accountHasBeenVerified