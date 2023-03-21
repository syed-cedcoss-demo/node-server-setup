import chalk from 'chalk';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import xss from 'xss-clean';
import { dbConnection } from './src/config/dbConnection.js';
import authRoute from './src/routes/authRoute.js';
import userRoute from './src/routes/userRoute.js';
import cronJob from './src/services/cronJob.js';
import globalError from './src/validations/globalError.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
dotenv.config();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:4000'],
  optionsSuccessStatus: 200
};

//* ********* database connect ************
dbConnection();

//* ********* middleware ************
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '1024px' }));
app.use(cors(corsOptions));
app.use(compression());
app.set('trust proxy', true);

//* ******* rate limiter: 150 req per 10 min ********* */
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

//* ********* log middleware ************
const accessLogStream = fs.createWriteStream(
  __dirname +
    `/public/logs/${new Date().toString().substring(0, 10)}.txt`.replaceAll(' ', '-'),
  {
    flags: 'a'
  }
);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan(':method :url :response-time'));
  app.use(morgan('combined', { stream: accessLogStream }));
} else {
  app.use(morgan('combined', { stream: accessLogStream }));
}

//* ********* http security headers ************
app.use(helmet());

// data sanitization against NoSQL query injection
app.use(mongoSanitize());
// data sanitization against XSS
app.use(xss());

//* ********** public path ************
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/upload', express.static(__dirname + '/public/uploads'));

//* ********** app routes ************
app.get('/', (req, res) => res.status(200).send('<h2>Server is running...</h2>'));
app.use('/auth', authRoute);
app.use('/user', userRoute);

//* **** route not found  ***********/
app.use('*', (req, res) => {
  res.status(404).send({ success: 'false', msg: 'This route not exist', data: {} });
});

const port = process.env.PORT ?? 3002;
const server = app.listen(port, () => {
  console.log(chalk.bgYellowBright.bold(`server is up and running on post ${port}`));
});

//* ******** global error handler **********
globalError(server, app);

cronJob();
