import express, { Application } from 'express';
import config from './config';
import initLoaders from './loaders';

const port = config.port;

const app: Application = express();

initLoaders(app);

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`)
}