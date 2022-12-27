import chalk from "chalk";
import userModel from "../models/userModel.js";
import { registrationMail } from "../services/email.js";
import { hashPassword, verifyPassword } from "../services/hash.js";
import { signJWT, verifyJWT } from "../services/jwt.js";

export const signup = async (req, res) => {
  try {
    //no validation
    let payload = req.body;
    const hashPass = await hashPassword(payload.password);
    payload = { ...payload, password: hashPass };
    const user = await userModel.create(payload);
    const token = await signJWT({ id: user?._id });
    await registrationMail({
      email: user?.email,
      name: user?.username,
      url: "https://yopmail.com/en/wm", //add verification url
    });
    res.status(200).send({ token, _id: user?._id, email: user?.email });
  } catch (error) {
    console.log(chalk.bgRed.bold(error?.message));
    res.status(200).send(error?.message);
  }
};
