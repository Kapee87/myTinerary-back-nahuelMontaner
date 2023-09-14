import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import { verify } from '../helpers/google-verify.js'

const controller = {

    signup: async (req, res, next) => {
        req.body.online = false
        req.body.role = 0

        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password, 10)

            await User.create(req.body)

            return res.status(201).json({
                succes: true,
                message: 'User Registered!'
            })
        } catch (error) {
            return next(error)
        }
    },
    signin: async (req, res, next) => {
        console.log('controller signin')

        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: true },
                { new: true }
            )

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },
                process.env.SECRET,
                { expiresIn: '5h' }
            )
            user.password = null //prevenimos devolver el pass por accidente

            return res.status(200).json({
                succes: true,
                message: 'User logged correctly',
                response: {
                    token,
                    user: {
                        name: user.name,
                        email: user.email,
                        image: user.image
                    }
                }
            })
        } catch (error) {
            next(error)
        }
    },
    googleSignIn: async (req, res, next) => {
        const { token_id } = req.body
        try {
            //verificar el token de gugle q viene desde el front
            const { name, email, image } = await verify(token_id)

            //verificar si el user existe
            let user = await User.findOne({ email })
            //si no existe, crearlo
            if (!user) {
                const data = {
                    name,
                    email,
                    image,
                    password: bcryptjs.hashSync(process.env.STANDARD_PASS, 10),
                    google: true,
                    verified_code: crypto.randomBytes(10).toString('hex')
                }
                user = await User.create(data)
            }
            user.online = true

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },
                process.env.SECRET,
                { expiresIn: '5h' }
            )
            user.password = null

            //si existe, logearlo

            return res.status(200).json({
                succes: true,
                message: 'User logged correctly with Google',
                response: {
                    token,
                    user: {
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        online: user.online
                    }
                }
            })
        } catch (error) {
            next(error)
        }
    },
    signout: async (req, res, next) => {

        try {
            await User.findOneAndUpdate(
                { email: req.user.email },
                { online: false },
                { new: true }
            )
            return res.status(200).json({
                succes: true,
                message: 'User signed out'
            })
        } catch (error) {
            next(error)
        }
    },
    token: async (req, res, next) => {
        const { user } = req
        // console.log(req, res);
        try {
            return res.status(200).json({
                user: {
                    name: user.name,
                    email: user.email,
                    image: user.image
                },
            })
        } catch (error) {
            console.log(error);
            // next(error)
        }
    }
}

export default controller