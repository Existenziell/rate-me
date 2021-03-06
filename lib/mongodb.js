import { MongoClient } from 'mongodb'
import config from '../app.config'

let uri = config.db.uri
let dbName = config.db.dbName
let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env')
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}
