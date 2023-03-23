import path from 'path';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  storage: path.join(__dirname, 'resume.sqlite'),
  host: 'localhost',
  dialect: 'sqlite',
  logging: console.log
});

export { Sequelize, sequelize };

