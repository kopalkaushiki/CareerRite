import express from 'express'
import { supabase } from '../lib/supabase.js'

const router = express.Router()

// Get all streams
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('streams').select('*').order('name', { ascending: true })
    if (error) return res.status(400).json({ error: error.message })
    res.json(data || [])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get stream by name
router.get('/:streamName', async (req, res) => {
  try {
    const streamName = req.params.streamName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    const { data: stream, error } = await supabase
      .from('streams')
      .select('*')
      .ilike('name', `%${streamName}%`)
      .maybeSingle()
    
    if (error) return res.status(400).json({ error: error.message })
    if (!stream) {
      return res.status(404).json({ error: 'Stream not found' })
    }
    res.json(stream)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create or update stream (for seeding data)
router.post('/', async (req, res) => {
  try {
    const body = req.body || {}
    if (!body.name) return res.status(400).json({ error: 'Missing stream name' })

    const { data: stream, error } = await supabase
      .from('streams')
      .upsert(body, { onConflict: 'name' })
      .select('*')
      .single()

    if (error) return res.status(400).json({ error: error.message })
    res.json(stream)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router



