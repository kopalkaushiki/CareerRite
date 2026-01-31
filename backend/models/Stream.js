import mongoose from 'mongoose'

const collegeSchema = new mongoose.Schema({
  rank: Number,
  name: String,
  location: String
})

const examSchema = new mongoose.Schema({
  name: String,
  description: String,
  youtubeLink: String
})

const pathStepSchema = new mongoose.Schema({
  title: String,
  description: String
})

const streamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  icon: String,
  description: String,
  path: [pathStepSchema],
  exams: [examSchema],
  colleges: [collegeSchema]
}, {
  timestamps: true
})

export default mongoose.model('Stream', streamSchema)


