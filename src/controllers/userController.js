import chalk from 'chalk';
import userModel from '../models/userModel.js';
import { registrationMail } from '../services/email.js';
import { hashPassword } from '../services/hash.js';
import { signJWT } from '../services/jwt.js';

export const signup = async (req, res) => {
  try {
    let payload = req.body;
    const hashPass = await hashPassword(payload.password);
    payload = { ...payload, password: hashPass };
    const user = await userModel.create(payload);
    const token = await signJWT({ id: user?._id });
    await registrationMail({
      email: user?.email,
      name: user?.username,
      url: token // add verification url
    });
    res.status(200).send({
      success: true,
      msg: 'User successfully register, check email to verify',
      data: {}
    });
  } catch (error) {
    console.log(chalk.bgRed.bold(error?.message));
    res.status(200).send({
      success: false,
      msg: error?.message,
      data: {}
    });
  }
};
