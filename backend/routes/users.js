import express from 'express'
import User from '../models/User.js'

const router = express.Router()

// Get or create user
router.post('/', async (req, res) => {
  try {
    const { name, class: userClass, goal } = req.body
    
    // Check if user exists
    let user = await User.findOne({ name, class: userClass })
    
    if (user) {
      // Update existing user
      user.goal = goal
      await user.save()
      res.json(user)
    } else {
      // Create new user
      user = new User({ name, class: userClass, goal })
      await user.save()
      res.status(201).json(user)
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update user
router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router


