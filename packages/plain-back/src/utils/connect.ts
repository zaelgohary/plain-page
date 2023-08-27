import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect(){
  const dbUri = config.get<string>("dbUri")

  try {
    mongoose.connect(dbUri)
    logger.info("connected to DB");
  } catch (error) {
    logger.error("Couldn't connect to DB");
    process.exit(1)
  }
}

export default connect