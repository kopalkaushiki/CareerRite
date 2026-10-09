import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { streamsData } from '../data/streamsData'

const StreamDetails = () => {
  const { streamName } = useParams()
  const { user, addVisitedPage, updateUser } = useUser()
  const [activeTab, setActiveTab] = useState('path')

  const stream = streamsData.find(
    (s) => s.name.toLowerCase().replace(/\s+/g, '-') === streamName
  )

  useEffect(() => {
    addVisitedPage(`stream-${streamName}-${activeTab}`)
    if (stream?.name && stream.name !== user.selectedStream) {
      updateUser({ selectedStream: stream.name }).catch(() => {})
    }
  }, [activeTab, addVisitedPage, stream, streamName, updateUser, user.selectedStream])

  if (!stream) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Stream Not Found</h1>
          <Link to="/explore" className="text-sky-600 hover:underline">
            Back to Explore
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{stream.name}</h1>
          <p className="text-lg text-gray-600">{stream.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex border-b border-gray-200">
            {['path', 'exam', 'colleges'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                  activeTab === tab
                    ? 'text-sky-600 border-b-2 border-sky-600 bg-sky-50'
                    : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {tab === 'path' ? 'Path' : tab === 'exam' ? 'Exams' : 'Colleges'}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTab === 'path' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Path</h2>
              <div className="space-y-6">
                {stream.path.map((step, index) => (
                  <div key={index} className="rounded-xl bg-sky-50 p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'exam' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Entrance Exams</h2>
              <div className="space-y-5">
                {stream.exams.map((exam, index) => (
                  <div key={index} className="rounded-xl bg-gradient-to-r from-sky-50 to-purple-50 p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{exam.name}</h3>
                    <p className="text-gray-600 mb-3">{exam.description}</p>
                    {exam.youtubeLink && (
                      <a
                        href={exam.youtubeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600 font-semibold"
                      >
                        Watch preparation tips
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'colleges' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Colleges</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-sky-500 to-purple-500 text-white">
                      <th className="p-4 text-left">Rank</th>
                      <th className="p-4 text-left">College</th>
                      <th className="p-4 text-left">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stream.colleges.map((college, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-700">#{college.rank}</td>
                        <td className="p-4 text-gray-800">{college.name}</td>
                        <td className="p-4 text-gray-600">{college.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StreamDetails

