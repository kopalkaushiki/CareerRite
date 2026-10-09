import { useEffect, useMemo, useState } from 'react'
import { useUser } from '../context/UserContext'
import StreamCard from '../components/StreamCard'
import { streamsData } from '../data/streamsData'

const Explore = () => {
  const { addVisitedPage } = useUser()
  const [query, setQuery] = useState('')

  useEffect(() => {
    addVisitedPage('explore')
  }, [addVisitedPage])

  const filteredStreams = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return streamsData
    return streamsData.filter(
      (stream) =>
        stream.name.toLowerCase().includes(term) ||
        stream.description.toLowerCase().includes(term)
    )
  }, [query])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Explore Career Streams</h1>
          <p className="text-lg text-gray-600">Discover streams, pathways, and colleges that match your future.</p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search streams..."
            className="w-full max-w-xl mx-auto block rounded-xl border border-gray-200 px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredStreams.map((stream) => (
            <StreamCard key={stream.name} stream={stream} />
          ))}
        </div>

        {!filteredStreams.length && (
          <div className="mt-8 rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">No streams match your search. Try a different keyword.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Explore
