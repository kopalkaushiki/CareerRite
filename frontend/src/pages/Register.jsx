import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const inputCls = 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all'

const Register = () => {
  const { register } = useUser()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', class: '', goal: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await register(form)
      navigate('/explore', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create your account</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input id="name" name="name" required value={form.name} onChange={handleChange} className={inputCls} placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputCls} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input id="password" name="password" type="password" minLength={6} required value={form.password} onChange={handleChange} className={inputCls} placeholder="At least 6 characters" />
          </div>
          <div>
            <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">Class</label>
            <select id="class" name="class" required value={form.class} onChange={handleChange} className={inputCls}>
              <option value="">Select your class</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
              <option value="College">College</option>
            </select>
          </div>
          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">Goal</label>
            <select id="goal" name="goal" required value={form.goal} onChange={handleChange} className={inputCls}>
              <option value="">Select your goal</option>
              <option value="Career Decision">Career Decision</option>
              <option value="Exploring Options">Exploring Options</option>
              <option value="Looking for Options">Looking for Options</option>
              <option value="Skill Development">Skill Development</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={submitting}
            className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white py-3 rounded-lg font-semibold disabled:opacity-60">
            {submitting ? 'Creating account...' : 'Sign up'}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account? <Link to="/login" className="text-sky-600 font-semibold">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
