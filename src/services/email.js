import chalk from 'chalk';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { signUp } from '../../public/templates/email.js';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

export const registrationMail = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: data?.email,
      subject: 'Account Confirmation Mail',
      text: 'Account Confirmation Mail',
      html: signUp(data)
    });
    console.log(chalk.red('sent email id:', info.messageId));
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
  }
};
