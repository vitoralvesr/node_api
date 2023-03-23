import { Sequelize } from 'sequelize';
import config from '../../config';

const databaseUrl = config.databaseUrl || 'sqlite::memory:';

const sequelize = new Sequelize(databaseUrl);

export { Sequelize, sequelize };

