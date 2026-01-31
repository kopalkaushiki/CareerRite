import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { streamsData } from '../data/streamsData'

const StreamDetails = () => {
  const { streamName } = useParams()
  const location = useLocation()
  const { addVisitedPage, updateUser } = useUser()
  const [activeTab, setActiveTab] = useState('path')

  const stream = streamsData.find(
    s => s.name.toLowerCase().replace(/\s+/g, '-') === streamName
  )

  useEffect(() => {
    // Set active tab from URL hash
    const hash = location.hash.substring(1)
    if (hash && ['path', 'exam', 'colleges'].includes(hash)) {
      setActiveTab(hash)
    }
    addVisitedPage(`stream-${streamName}-${activeTab}`)
    updateUser({ selectedStream: stream?.name || '' })
  }, [location, activeTab, streamName, stream])

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

  const tabs = [
    { id: 'path', label: 'Path', href: '#path' },
    { id: 'exam', label: 'Exams', href: '#exam' },
    { id: 'colleges', label: 'Colleges', href: '#colleges' }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{stream.name}</h1>
          <p className="text-lg text-gray-600">{stream.description}</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-sky-600 border-b-2 border-sky-600 bg-sky-50'
                    : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTab === 'path' && <PathContent stream={stream} />}
          {activeTab === 'exam' && <ExamContent stream={stream} />}
          {activeTab === 'colleges' && <CollegesContent stream={stream} />}
        </div>
      </div>
    </div>
  )
}

const PathContent = ({ stream }) => {
  const steps = stream.path || []

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Path</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-purple-400"></div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start">
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="ml-6 flex-1">
                <div className="bg-sky-50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ExamContent = ({ stream }) => {
  const exams = stream.exams || []

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Entrance Exams</h2>
      <div className="grid gap-6">
        {exams.map((exam, index) => (
          <div key={index} className="bg-gradient-to-r from-sky-50 to-purple-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{exam.name}</h3>
            <p className="text-gray-600 mb-4">{exam.description}</p>
            {exam.youtubeLink && (
              <a
                href={exam.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold"
              >
                <span className="mr-2">📺</span>
                Watch on YouTube
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const CollegesContent = ({ stream }) => {
  const colleges = stream.colleges || []

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Colleges</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-sky-500 to-purple-500 text-white">
              <th className="p-4 text-left rounded-tl-lg">Rank</th>
              <th className="p-4 text-left">College Name</th>
              <th className="p-4 text-left rounded-tr-lg">Location</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-sky-50 transition-colors"
              >
                <td className="p-4 font-semibold text-gray-700">#{college.rank}</td>
                <td className="p-4 text-gray-800">{college.name}</td>
                <td className="p-4 text-gray-600">{college.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StreamDetails

