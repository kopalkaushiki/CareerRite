import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { streamsData } from '../data/streamsData'

const Home = () => {
  const { user, addVisitedPage, calculateProgress } = useUser()

  useEffect(() => {
    addVisitedPage('home')
  }, [])

  const progress = calculateProgress()

  // Find stream details to give tailored recommendations
  const currentStream = streamsData.find(s => s.name === user.selectedStream)

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-sky-500 to-purple-600 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Welcome back, {user.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl">
              Your career discovery journey is {progress}% complete. Let's take the next step towards your goal of becoming successful in {user.selectedStream || 'your chosen field'}.
            </p>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-0 right-32 -mb-16 w-32 h-32 rounded-full bg-white opacity-10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Progress & Stats */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3">📈</span>
                Your Progress
              </h2>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-600 bg-sky-200">
                      Journey
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold inline-block text-sky-600">
                      {progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-sky-100">
                  <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-sky-500 to-purple-500 transition-all duration-1000"></div>
                </div>
                <p className="text-sm text-gray-500 mt-4 font-medium">You have explored {user.visitedPages?.length || 0} pages of content.</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">⚡</span>
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Link to="/explore" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors group">
                  <span className="font-semibold text-gray-700 group-hover:text-sky-600">Explore Streams</span>
                  <span className="text-sky-500">→</span>
                </Link>
                <Link to="/profile" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors group">
                  <span className="font-semibold text-gray-700 group-hover:text-purple-600">Update Profile</span>
                  <span className="text-purple-500">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Recommendations & Next Steps */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">🧭</span>
                Recommended Next Steps
              </h2>
              
              {currentStream ? (
                <div className="space-y-6">
                  <div className="p-5 border border-indigo-100 bg-indigo-50/50 rounded-2xl flex items-start space-x-4">
                    <div className="text-3xl">{currentStream.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo-900">Dive into {currentStream.name}</h3>
                      <p className="text-indigo-700/80 mt-1 mb-3">Since you selected this stream, you should explore the specific colleges and detailed path requirements.</p>
                      <Link to={`/stream/${currentStream.name}`} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                        View Details
                      </Link>
                    </div>
                  </div>

                  {!user.competitiveExam && (
                    <div className="p-5 border border-amber-100 bg-amber-50/50 rounded-2xl flex items-start space-x-4">
                      <div className="text-3xl">📝</div>
                      <div>
                        <h3 className="text-lg font-bold text-amber-900">Select a Target Exam</h3>
                        <p className="text-amber-700/80 mt-1 mb-3">You haven't selected a competitive exam yet. Choosing one unlocks your personalized roadmap!</p>
                        <Link to="/profile" className="inline-block px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 transition-colors shadow-sm">
                          Set Target Exam
                        </Link>
                      </div>
                    </div>
                  )}

                  {user.competitiveExam && !user.roadmap && (
                    <div className="p-5 border border-emerald-100 bg-emerald-50/50 rounded-2xl flex items-start space-x-4">
                      <div className="text-3xl">🗺️</div>
                      <div>
                        <h3 className="text-lg font-bold text-emerald-900">Review your Roadmap</h3>
                        <p className="text-emerald-700/80 mt-1 mb-3">Your personalized roadmap for {user.competitiveExam} is ready. Check your profile to view your journey timeline.</p>
                        <Link to="/profile" className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-sm">
                          View Roadmap
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No Stream Selected</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">Select a stream in your profile to get personalized recommendations and dynamic roadmaps.</p>
                  <Link to="/profile" className="inline-block px-6 py-3 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-colors shadow-md">
                    Go to Profile
                  </Link>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home



