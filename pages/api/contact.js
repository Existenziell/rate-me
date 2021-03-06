/**
**  Backend for contact form
**  Save to mongoDB collection 'inquiries'
**/

import { connectToDatabase } from "../../lib/mongodb"
import { getSession } from 'next-auth/client'
import { ObjectId } from 'mongodb'

export default async (req, res) => {

  try {
    const { db } = await connectToDatabase()
    const session = await getSession({ req })

    let data = req.body
    if (!data) {
      res.status(404).send(false)
      return
    }
    data.createdAt = Date.now()
    if (session) data._userId = ObjectId(session.user.id)

    await db.collection('inquiries').insertOne({ ...data })
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}
