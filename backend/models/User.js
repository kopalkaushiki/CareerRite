import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 6, select: false },
    class: {
      type: String,
      required: true,
      enum: ['9', '10', '11', '12', 'College'],
    },
    goal: {
      type: String,
      required: true,
      enum: ['Career Decision', 'Exploring Options', 'Looking for Options', 'Skill Development'],
    },
    selectedStream: { type: String, default: '' },
    goalCollege: { type: String, default: '', trim: true },
    visitedPages: { type: [String], default: [] },
    quizResult: {
      takenAt: { type: Date },
      topStreams: [
        {
          _id: false,
          stream: { type: String, required: true },
          match: { type: Number, required: true, min: 0, max: 100 },
        },
      ],
    },
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password)
}

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password
    delete ret.__v
    return ret
  },
})

export default mongoose.model('User', userSchema)
