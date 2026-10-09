import dns from 'node:dns'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import streamRoutes from './routes/streams.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI

if (!MONGO_URI) {
  console.error('Missing MONGO_URI in backend/.env')
  process.exit(1)
}
if (!process.env.JWT_SECRET) {
  console.error('Missing JWT_SECRET in backend/.env (any long random string)')
  process.exit(1)
}

if (process.env.DNS_SERVERS) {
  dns.setServers(process.env.DNS_SERVERS.split(',').map((s) => s.trim()))
}

app.use(
  cors({
    origin: (process.env.CLIENT_URL || 'http://localhost:3000,http://127.0.0.1:3000').split(','),
  })
)
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/streams', streamRoutes)

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'CareerRite API is running',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  })
})

function explainMongoError(error) {
  const msg = String(error?.message || error)
  console.error('\nMongoDB connection failed:', msg)
  if (/bad auth|authentication failed/i.test(msg)) {
    console.error('-> Wrong database username/password. Check Atlas > Database Access. If the password has special characters (@ : / ? # %), URL-encode them or reset it to letters+numbers only.')
  } else if (/querySrv|ENOTFOUND|ECONNREFUSED.*_mongodb/i.test(msg)) {
    console.error('-> DNS/SRV lookup failed. Check the cluster host in the URI, your internet, or set DNS_SERVERS=8.8.8.8,1.1.1.1 in .env.')
  } else if (/ReplicaSetNoPrimary|Server selection timed out|ETIMEDOUT|SSL|tlsv1/i.test(msg)) {
    console.error('-> Atlas is not accepting your connection. Most common cause: your IP is not allowed. Atlas > Network Access > Add IP Address > "Add Current IP Address" (or 0.0.0.0/0 for development), wait ~1 min, retry.')
  }
  console.error('')
}

mongoose
  .connect(MONGO_URI, {
    dbName: process.env.DB_NAME || 'careerrite',
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    explainMongoError(error)
    process.exit(1)
  })

export default app

