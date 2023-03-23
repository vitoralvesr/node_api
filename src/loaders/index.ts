import { Application } from 'express';
import initDatabase from './database';
import expressLoader from './express';

export default async (app: Application) => {
  await expressLoader(app);
  initDatabase();
  console.log('Express Initialized');
}
