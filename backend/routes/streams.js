import express from 'express'
import Stream from '../models/Stream.js'

const router = express.Router()

// Get all streams
router.get('/', async (req, res) => {
  try {
    const streams = await Stream.find()
    res.json(streams)
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
    
    const stream = await Stream.findOne({ 
      name: { $regex: new RegExp(streamName, 'i') } 
    })
    
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
    const stream = await Stream.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true, upsert: true }
    )
    res.json(stream)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router



