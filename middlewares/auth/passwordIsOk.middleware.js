import bcryptjs from 'bcryptjs'

const passwordIsOk = async (req, res, next) => {
    console.log('pass middleware');
    try {
        const db_pass = req.user.password
        const form_pass = req.body.password
        console.log(db_pass, form_pass, bcryptjs.hashSync(form_pass));
        console.log(bcryptjs.compareSync(form_pass, db_pass));
        if (bcryptjs.compareSync(form_pass, db_pass)) return next()
        return res.status(400).json({
            message: 'invalid credentials'
        })
    } catch (error) {
        return next(error)
    }
}

export default passwordIsOk