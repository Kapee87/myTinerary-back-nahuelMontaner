import express from 'express'
import authController from '../controllers/auth.controller.js'
// import { validator } from '../middlewares/validator.js';
// import { createUserSchema } from '../schema/user.schema.js';
import accountExistsSignUp from '../middlewares/auth/accountExistsSignUp.middleware.js';
import accountExistsSignIn from '../middlewares/auth/accountExistsSignIn.middleware.js';
import accountHasBeenVerified from '../middlewares/auth/accountHasBeenVerified.middleware.js';
import passwordIsOk from '../middlewares/auth/passwordIsOk.middleware.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

const { signup, signin, signout, token } = authController
router.post('/signup',
    /* validator(validateSignUpUser), */
    accountExistsSignUp,
    signup);

router.post('/signin',
    /* validator(validateSignInUser), */
    accountExistsSignIn,
    accountHasBeenVerified,
    passwordIsOk,
    signin);

router.post('/signout',
    passport.authenticate('jwt', { session: false }),
    signout
)

router.post('/token',
    passport.authenticate('jwt', { session: false },
        token)
)

export default router