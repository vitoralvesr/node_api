import config from '../config';
import Candidate from '../db/models/candidate';

const isDev = config.nodeEnv === 'development'
const isTest = config.nodeEnv !== 'test'

const initDatabase = () => Promise.all([
  Candidate.sync({ alter: isDev || isTest }),
]);

export default initDatabase;