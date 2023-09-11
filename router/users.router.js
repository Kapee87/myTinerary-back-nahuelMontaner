import express from 'express'
import userController from '../controllers/users.controller.js';
import { validator } from '../middlewares/validator.js';
import { createUserSchema } from '../schema/user.schema.js';

const router = express.Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = userController

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', validator(createUserSchema), createUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);


export default router