import express from 'express'
import User from '../models/User.js'
import { signToken, requireAuth } from '../middleware/auth.js'

const router = express.Router()

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, class: userClass, goal } = req.body

    if (!name || !email || !password || !userClass || !goal) {
      return res.status(400).json({ error: 'Name, email, password, class and goal are required' })
    }
    if (String(password).length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' })
    }

    const exists = await User.findOne({ email: String(email).toLowerCase().trim() })
    if (exists) return res.status(409).json({ error: 'An account with this email already exists' })

    const user = await User.create({ name, email, password, class: userClass, goal })
    res.status(201).json({ token: signToken(user._id), user })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'An account with this email already exists' })
    }
    res.status(400).json({ error: error.message })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const user = await User.findOne({ email: String(email).toLowerCase().trim() }).select('+password')
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    res.json({ token: signToken(user._id), user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Current user
router.get('/me', requireAuth, (req, res) => {
  res.json({ user: req.user })
})

export default router
