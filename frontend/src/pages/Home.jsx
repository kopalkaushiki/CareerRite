import { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import UserInfoForm from '../components/UserInfoForm'

const Home = () => {
  const { user, addVisitedPage } = useUser()

  useEffect(() => {
    addVisitedPage('home')
  }, [])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Find Your Perfect Career Path with
            <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent"> CareerRite</span>
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Your personalized guide to discovering and achieving your career goals
          </p>
        </div>

        {/* User Info Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Let's Get Started
          </h2>
          <UserInfoForm />
        </div>
      </div>
    </div>
  )
}

export default Home



