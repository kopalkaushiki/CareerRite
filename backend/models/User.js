import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true,
    enum: ['9', '10', '11', '12', 'College']
  },
  goal: {
    type: String,
    required: true,
    enum: ['Career Decision', 'Exploring Options', 'Looking for Options', 'Skill Development']
  },
  selectedStream: {
    type: String,
    default: ''
  },
  goalCollege: {
    type: String,
    default: ''
  },
  visitedPages: {
    type: [String],
    default: []
  },
  profilePhoto: {
    type: String,
    default: ''
  },
  skills: {
    type: String,
    default: ''
  },
  marks10: {
    type: String,
    default: ''
  },
  marks12: {
    type: String,
    default: ''
  },
  competitiveExam: {
    type: String,
    default: ''
  },
  targetDegree: {
    type: String,
    default: ''
  },
  roadmap: {
    type: String,
    default: ''
  },
  quizAnswers: {
    type: Object,
    default: {}
  },
  quizResultKey: {
    type: String,
    default: ''
  },
  quizCounts: {
    type: Object,
    default: { A: 0, B: 0, C: 0, D: 0 }
  }
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)


