import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const UserInfoForm = () => {
  const navigate = useNavigate()
  const { user, updateUser } = useUser()
  const [formData, setFormData] = useState({
    name: user.name || '',
    class: user.class || '',
    goal: user.goal || '',
  })
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)
    try {
      await updateUser(formData)
      navigate('/explore')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
          Class
        </label>
        <select
          id="class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
        >
          <option value="">Select your class</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
          <option value="College">College</option>
        </select>
      </div>

      <div>
        <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">
          Goal
        </label>
        <select
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
        >
          <option value="">Select your goal</option>
          <option value="Career Decision">Career Decision</option>
          <option value="Exploring Options">Exploring Options</option>
          <option value="Looking for Options">Looking for Options</option>
          <option value="Skill Development">Skill Development</option>
        </select>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-sky-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-60"
      >
        {saving ? 'Saving...' : 'Save & Continue'}
      </button>
    </form>
  )
}

export default UserInfoForm

