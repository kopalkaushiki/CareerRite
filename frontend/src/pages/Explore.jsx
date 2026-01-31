import { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import StreamCard from '../components/StreamCard'
import { streamsData } from '../data/streamsData'

const Explore = () => {
  const { addVisitedPage } = useUser()

  useEffect(() => {
    addVisitedPage('explore')
  }, [])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Career Streams
          </h1>
          <p className="text-lg text-gray-600">
            Discover various career paths and find what suits you best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streamsData.map((stream, index) => (
            <StreamCard key={index} stream={stream} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore



