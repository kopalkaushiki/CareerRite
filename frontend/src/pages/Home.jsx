import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import UserInfoForm from '../components/UserInfoForm'

const Home = () => {
  const { isAuthenticated, addVisitedPage } = useUser()

  useEffect(() => {
    addVisitedPage('home')
  }, [addVisitedPage])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Find Your Perfect Career Path with
            <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent"> CareerRite</span>
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Your personalized guide to discovering and achieving your career goals
          </p>
        </div>

        {isAuthenticated ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Update your details</h2>
            <UserInfoForm />
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Let's Get Started</h2>
            <p className="text-gray-600">Create a free account to save your progress.</p>
            <div className="flex justify-center gap-4">
              <Link to="/register" className="bg-gradient-to-r from-sky-500 to-purple-500 text-white py-3 px-8 rounded-lg font-semibold">
                Sign up
              </Link>
              <Link to="/login" className="border border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-semibold">
                Log in
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
