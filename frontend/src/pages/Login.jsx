import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const Login = () => {
  const navigate = useNavigate()
  const { loginUser, registerUser } = useUser()
  const [isLogin, setIsLogin] = useState(true)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    class: '',
    goal: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isLogin) {
        await loginUser({ email: formData.email, password: formData.password })
      } else {
        await registerUser(formData)
      }
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.error || `Failed to ${isLogin ? 'login' : 'register'}. Please try again.`)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 -ml-10 -mb-10"></div>

        <div className="text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {isLogin ? 'Welcome Back' : 'Join'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600">CareerRite</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500 font-medium">
            {isLogin ? 'Enter your credentials to access your dashboard' : 'Create an account to start your journey'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium relative z-10">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required={!isLogin} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="John Doe" />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="••••••••" />
          </div>

          {!isLogin && (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Current Class</label>
                <select name="class" value={formData.class} onChange={handleChange} required={!isLogin} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all text-gray-700">
                  <option value="">Select your class</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                  <option value="College">College</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Primary Objective</label>
                <select name="goal" value={formData.goal} onChange={handleChange} required={!isLogin} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all text-gray-700">
                  <option value="">Select an objective</option>
                  <option value="Career Decision">Career Decision</option>
                  <option value="Exploring Options">Exploring Options</option>
                  <option value="Looking for Options">Looking for Options</option>
                  <option value="Skill Development">Skill Development</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white mt-4 py-3.5 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700'
            }`}
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="text-center mt-6 relative z-10">
          <button 
            type="button" 
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
            className="text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
