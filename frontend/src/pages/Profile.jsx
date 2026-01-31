import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'

const Profile = () => {
  const { user, updateUser, calculateProgress, addVisitedPage } = useUser()
  const [goalCollege, setGoalCollege] = useState(user.goalCollege || '')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    addVisitedPage('profile')
  }, [])

  const handleSaveCollege = () => {
    updateUser({ goalCollege })
    setIsEditing(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('careerRiteUser')
    window.location.href = '/'
  }

  const progress = calculateProgress()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Profile</h1>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* User Info Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                <p className="text-lg text-gray-800">{user.name || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Class</label>
                <p className="text-lg text-gray-800">{user.class || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Goal</label>
                <p className="text-lg text-gray-800">{user.goal || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Selected Stream</label>
                <p className="text-lg text-gray-800">{user.selectedStream || 'None selected'}</p>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Progress</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Pages Visited</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-sky-500 to-purple-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {user.visitedPages?.length || 0} pages explored
              </p>
            </div>
          </div>

          {/* Goal College Section */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Goal College</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sky-600 hover:text-sky-700 font-semibold"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={handleSaveCollege}
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Save
                </button>
              )}
            </div>
            {isEditing ? (
              <input
                type="text"
                value={goalCollege}
                onChange={(e) => setGoalCollege(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                placeholder="Enter your goal college"
              />
            ) : (
              <p className="text-lg text-gray-800">{goalCollege || 'Not set'}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile



