import fs from 'fs';
import { dirname } from 'path';
import { setInterval } from 'timers';
import { fileURLToPath } from 'url';
import { logsMsg } from './email.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cronJob = () => {
  const logEmail = async () => {
    const src = `${__dirname.replace('/src/services', '')}/public/logs/${new Date()
      .toString()
      .substring(0, 10)}.txt`.replaceAll(' ', '-');
    fs.readFile(src, 'utf8', (err, data) => {
      if (err) {
        console.log('err', err);
        return;
      }
      console.log(data.split('::'));
      logsMsg({ email: 'syedhasnainmehadi@yopmail.com', data: data.split('::') });
    });
  };
  setInterval(() => {
    logEmail();
  }, 1000 * 60 * 60);
};
export default cronJob;
