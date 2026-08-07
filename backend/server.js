import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import streamRoutes from './routes/streams.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users', userRoutes)
app.use('/api/streams', streamRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CareerRite API is running' })
})

// Root route
app.get('/', (req, res) => {
  res.send('<h1>CareerRite Backend is Running Successfully!</h1><p>The backend API is active. To use the application, please start your frontend server (typically on port 3000).</p>');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app

