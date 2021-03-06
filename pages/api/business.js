/**
**  API to retrieve all businesses
**/

import { connectToDatabase } from "../../lib/mongodb"

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const result = await db.collection('business').find({}).sort().toArray()
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send(false)
  }
}
