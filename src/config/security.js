import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import xss from 'xss-clean';
const __dirname = dirname(fileURLToPath(import.meta.url));

const security = (app) => {
  //* ********* log middleware ************
  const formatted = __dirname.substring(0, __dirname.length - 11);
  const accessLogStream = fs.createWriteStream(
    formatted +
      `/public/logs/${new Date().toString().substring(0, 10)}.txt`.replaceAll(' ', '-'),
    {
      flags: 'a'
    }
  );
  app.use(morgan('combined', { stream: accessLogStream }));

  //* ******* rate limiter: 150 req per 10 min ********* */
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 150,
    standardHeaders: true,
    legacyHeaders: false
  });
  app.use(limiter);

  //* ********* http security headers ************
  app.use(helmet());

  // data sanitization against NoSQL query injection
  app.use(mongoSanitize());
  // data sanitization against XSS
  app.use(xss());
};
export default security;
