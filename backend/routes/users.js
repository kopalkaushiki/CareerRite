import express from 'express'
import { requireAuth } from '../middleware/auth.js'

const router = express.Router()

router.use(requireAuth)

const EDITABLE = ['name', 'class', 'goal', 'selectedStream', 'goalCollege']

router.patch('/me', async (req, res) => {
  try {
    for (const key of EDITABLE) {
      if (req.body[key] !== undefined) req.user[key] = req.body[key]
    }
    await req.user.save()
    res.json({ user: req.user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post('/me/visits', async (req, res) => {
  try {
    const { page } = req.body
    if (!page || typeof page !== 'string') {
      return res.status(400).json({ error: 'page is required' })
    }
    if (!req.user.visitedPages.includes(page)) {
      req.user.visitedPages.push(page)
      await req.user.save()
    }
    res.json({ user: req.user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

const STREAMS = [
  'Engineering',
  'Medical',
  'Law',
  'Architecture',
  'Defense',
  'MBA',
  'Design',
  'Arts & Humanities',
  'Science & Research',
]

router.post('/me/quiz', async (req, res) => {
  try {
    const { topStreams } = req.body
    const valid =
      Array.isArray(topStreams) &&
      topStreams.length >= 1 &&
      topStreams.length <= 3 &&
      topStreams.every(
        (t) => STREAMS.includes(t?.stream) && Number.isFinite(t?.match) && t.match >= 0 && t.match <= 100
      )

    if (!valid) return res.status(400).json({ error: 'Invalid quiz result' })

    req.user.quizResult = {
      takenAt: new Date(),
      topStreams: topStreams.map(({ stream, match }) => ({ stream, match })),
    }
    await req.user.save()
    res.json({ user: req.user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router

