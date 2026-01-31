import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
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
  }
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)


