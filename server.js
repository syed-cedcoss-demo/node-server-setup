import chalk from 'chalk';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { dbConnection } from './src/config/dbConnection.js';
import security from './src/config/security.js';
import authRoute from './src/routes/authRoute.js';
import userRoute from './src/routes/userRoute.js';
import cronJob from './src/services/cronJob.js';
import globalError from './src/validations/globalError.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
dotenv.config();

//* ********* database connect ************
dbConnection();

// **************** cron job register **********
cronJob();

//* ********* middleware ************
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '1024px' }));
app.use(cors());
app.use(compression());
app.set('trust proxy', true);

if (process.env.NODE_ENV === 'production') {
  security(app);
}

//* ********** public path ************
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/upload', express.static(__dirname + '/public/uploads'));
app.use('/logs', express.static(__dirname + '/public/logs'));

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
