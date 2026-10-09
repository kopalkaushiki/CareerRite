import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const inputCls = 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all'

const Login = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(form.email, form.password)
      navigate(location.state?.from || '/explore', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome back</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input id="email" type="email" required value={form.email} className={inputCls}
              onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input id="password" type="password" required value={form.password} className={inputCls}
              onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Your password" />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={submitting}
            className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white py-3 rounded-lg font-semibold disabled:opacity-60">
            {submitting ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-6 text-center">
          New here? <Link to="/register" className="text-sky-600 font-semibold">Create an account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
