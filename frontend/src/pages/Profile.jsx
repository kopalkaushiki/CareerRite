import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'

const Profile = () => {
  const { user, updateUser, logout, calculateProgress, addVisitedPage } = useUser()
  const [goalCollege, setGoalCollege] = useState(user.goalCollege || '')
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    addVisitedPage('profile')
  }, [addVisitedPage])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)
    try {
      await updateUser({ goalCollege })
      setIsEditing(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-wide text-sky-600 font-semibold">Profile</p>
            <h1 className="text-3xl font-bold text-gray-800">{user.name || 'Your profile'}</h1>
          </div>
          <button
            onClick={logout}
            className="rounded-lg border border-red-200 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-sky-50 p-5">
            <p className="text-sm text-gray-500">Class</p>
            <p className="mt-1 text-xl font-semibold text-gray-800">{user.class || 'Not set'}</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-5">
            <p className="text-sm text-gray-500">Goal</p>
            <p className="mt-1 text-xl font-semibold text-gray-800">{user.goal || 'Not set'}</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-5 md:col-span-2">
            <p className="text-sm text-gray-500">Selected stream</p>
            <p className="mt-1 text-xl font-semibold text-gray-800">{user.selectedStream || 'Not selected yet'}</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-gray-800">Career progress</h2>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
              {calculateProgress()}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-500 to-purple-500"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="goalCollege" className="mb-2 block text-sm font-medium text-gray-700">
              Goal college
            </label>
            <input
              id="goalCollege"
              value={goalCollege}
              onChange={(e) => setGoalCollege(e.target.value)}
              disabled={!isEditing}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 disabled:bg-gray-100"
              placeholder="e.g. IIT Delhi"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
                >
                  {saving ? 'Saving...' : 'Save'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setGoalCollege(user.goalCollege || '')
                    setIsEditing(false)
                    setError('')
                  }}
                  className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
