import fs from 'fs';
import { dirname } from 'path';
import { setInterval } from 'timers';
import { fileURLToPath } from 'url';
import userModel from '../models/userModel.js';
import { logsMsg } from './email.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cronJob = () => {
  // OTP RESET
  const otpReset = async () => {
    console.log('OTP RESET RUN');
    const minsAgo = new Date(Date.now() - 1000 * 60 * 10);
    await userModel.updateMany({ createdAt: { $lte: minsAgo } }, { $unset: { otp: 1 } });
  };
  const logEmail = async () => {
    const src = `${__dirname.replace('/src/services', '')}/public/logs/${new Date()
      .toString()
      .substring(0, 10)}.txt`.replaceAll(' ', '-');
    fs.readFile(src, 'utf8', (err, data) => {
      if (err) {
        console.log('err', err);
        return;
      }
      const format = data.split('::');
      let add = '';
      for (let i = 0; i < format.length; i++) {
        add = add.concat(` <tr style="border-bottom: 1px solid #dddddd">
            <td style="padding: 12px 15px">${i}</td>
            <td style="padding: 12px 15px">
              ${format[i]}
            </td>
          </tr>`);
      }
      logsMsg({ email: 'syedhasnainmehadi@yopmail.com', data: add });
    });
  };
  setInterval(() => {
    otpReset();
  }, 1000 * 60 * 5);
  setInterval(() => {
    logEmail();
  }, 1000 * 60 * 60 * 12);
};
export default cronJob;
