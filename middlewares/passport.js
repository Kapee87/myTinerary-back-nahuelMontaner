import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from 'passport-jwt'

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //extrae info del jwt como el id
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload, done) => {
            try {
                const user = await User.findOne({ _id: jwt_payload.id }, '-password')

                if (user) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }

            } catch (error) {
                console.log('error de passport', error);
                return done(error, false)
            }
        }
    )
)