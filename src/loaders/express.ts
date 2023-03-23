import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import routes from '../api/routes';

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/api/v1', routes);

  return app;
}
