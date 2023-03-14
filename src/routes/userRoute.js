import express from 'express';
import { signup } from '../controllers/userController.js';
import { userSchema, validate } from '../middleware/userSchema.js';

const router = express.Router();

router.post('/signup', validate(userSchema), signup);

export default router;
