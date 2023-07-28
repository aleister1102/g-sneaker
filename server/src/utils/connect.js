import mongoose from "mongoose"
import logger from "./logger.js"
import 'dotenv/config'
const { DB_URI } = process.env

async function connect() {
  const dbUri = DB_URI;

  try {
    await mongoose.connect(dbUri)
    logger.info('Connected to DB!')
  } catch (error) {
    logger.error(`Failed to connect to DB, error: ${error?.message}!!!`)
  }
}

export default connect