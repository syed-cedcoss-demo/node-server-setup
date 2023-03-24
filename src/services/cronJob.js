import userModel from '../models/userModel.js';
import { logsMsg } from './email.js';

const cronJob = () => {
  // OTP RESET
  const otpReset = async () => {
    console.log('OTP RESET RUN');
    const minsAgo = new Date(Date.now() - 1000 * 60 * 10);
    await userModel.updateMany({ createdAt: { $lte: minsAgo } }, { $unset: { otp: 1 } });
  };
  const logEmail = async () => {
    console.log('DAILY LOG SENT');
    const fileName = `${new Date().toString().substring(0, 10)}.txt`.replaceAll(' ', '-');
    logsMsg({
      email: 'syedhasnainmehadi@yopmail.com',
      data: `${process.env.SERVER_URL}/logs/${fileName}`
    });
  };
  otpReset();
  setInterval(() => {
    otpReset();
  }, 1000 * 60 * 5);
  setInterval(() => {
    logEmail();
  }, 1000 * 60 * 60 * 12);
};
export default cronJob;
