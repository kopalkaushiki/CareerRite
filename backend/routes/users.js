import express from 'express'
import bcrypt from 'bcryptjs'
import { supabase } from '../lib/supabase.js'

const router = express.Router()

const toUserResponse = (row) => {
  if (!row) return null
  // Keep frontend compatibility: Mongo used `_id`; Supabase uses `id`.
  const { password_hash, ...rest } = row
  return { ...rest, _id: row.id }
}

// Register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, class: userClass, goal } = req.body
    
    // Check if user exists
    const { data: existing, error: existingError } = await supabase
      .from('users')
      .select('id')
      .eq('email', (email || '').toLowerCase().trim())
      .maybeSingle()

    if (existingError) {
      return res.status(400).json({ error: existingError.message })
    }

    if (existing) {
      return res.status(400).json({ error: 'User with this email already exists' })
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const payload = {
      name,
      email: (email || '').toLowerCase().trim(),
      password_hash: hashedPassword,
      class: userClass,
      goal
    }

    const { data: created, error: createError } = await supabase
      .from('users')
      .insert(payload)
      .select('*')
      .single()

    if (createError) {
      return res.status(400).json({ error: createError.message })
    }

    res.status(201).json(toUserResponse(created))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', (email || '').toLowerCase().trim())
      .maybeSingle()

    if (userError) {
      return res.status(400).json({ error: userError.message })
    }

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password_hash || '')
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    res.json(toUserResponse(user))
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', req.params.id)
      .maybeSingle()

    if (userError) {
      return res.status(400).json({ error: userError.message })
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(toUserResponse(user))
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update user
router.patch('/:id', async (req, res) => {
  try {
    // Prevent password update via this route
    const { password, password_hash, ...update } = req.body || {}

    const { data: user, error: updateError } = await supabase
      .from('users')
      .update(update)
      .eq('id', req.params.id)
      .select('*')
      .maybeSingle()

    if (updateError) {
      return res.status(400).json({ error: updateError.message })
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(toUserResponse(user))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router


