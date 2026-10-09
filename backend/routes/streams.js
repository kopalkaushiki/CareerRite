import express from 'express'
import Stream from '../models/Stream.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const streams = await Stream.find().sort({ name: 1 })
    res.json(streams)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/:streamName', async (req, res) => {
  try {
    const streamName = req.params.streamName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const stream = await Stream.findOne({
      name: { $regex: new RegExp(streamName, 'i') },
    })

    if (!stream) {
      return res.status(404).json({ error: 'Stream not found' })
    }
    res.json(stream)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const body = req.body || {}
    if (!body.name) return res.status(400).json({ error: 'Missing stream name' })

    const stream = await Stream.findOneAndUpdate({ name: body.name }, body, {
      new: true,
      upsert: true,
      runValidators: true,
    })

    res.json(stream)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router

