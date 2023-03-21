import express from 'express';
import {
  forgetPassword,
  login,
  resetPassword,
  signup,
  verify
} from '../controllers/authController.js';
import { userSchema, validate } from '../middleware/userSchema.js';

const router = express.Router();

router.post('/signup', validate(userSchema), signup);
router.get('/verify', verify);
router.post('/login', login);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetPassword);

export default router;
