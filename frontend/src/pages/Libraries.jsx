import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { streamsData } from '../data/streamsData'

const getYouTubeSearchUrl = (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`

const Libraries = () => {
  const { user, addVisitedPage } = useUser()

  useEffect(() => {
    addVisitedPage('libraries')
  }, [])

  const stream = useMemo(() => {
    if (!user?.selectedStream) return null
    return streamsData.find((s) => s.name === user.selectedStream) || null
  }, [user?.selectedStream])

  const exam = useMemo(() => {
    if (!stream || !user?.competitiveExam) return null
    return (stream.exams || []).find((e) => e.name === user.competitiveExam) || null
  }, [stream, user?.competitiveExam])

  const quickLinks = useMemo(() => {
    const links = []

    if (user?.selectedStream) {
      links.push({
        title: `${user.selectedStream} basics roadmap`,
        url: getYouTubeSearchUrl(`${user.selectedStream} career roadmap for students`)
      })
    }

    if (user?.competitiveExam) {
      links.push({
        title: `${user.competitiveExam} full preparation playlist`,
        url: getYouTubeSearchUrl(`${user.competitiveExam} preparation playlist`)
      })
      links.push({
        title: `${user.competitiveExam} previous year questions`,
        url: getYouTubeSearchUrl(`${user.competitiveExam} previous year questions`)
      })
    }

    links.push({ title: 'Study techniques (Pomodoro, active recall)', url: getYouTubeSearchUrl('active recall spaced repetition pomodoro for students') })
    links.push({ title: 'How to build a study timetable', url: getYouTubeSearchUrl('how to make a study timetable for exams') })

    return links
  }, [user?.selectedStream, user?.competitiveExam])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Libraries</h1>
            <p className="text-gray-600 mt-2">
              Curated study materials based on your <strong>stream</strong> and <strong>target exam</strong>.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/explore" className="px-5 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 font-extrabold hover:bg-gray-50">
              Back to Explore
            </Link>
            <Link to="/profile" className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-extrabold hover:bg-gray-800">
              Profile
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">Your current focus</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Stream</div>
                <div className="font-extrabold text-gray-900 mt-1">{user?.selectedStream || 'Not selected yet'}</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Target exam</div>
                <div className="font-extrabold text-gray-900 mt-1">{user?.competitiveExam || 'Not selected yet'}</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Goal college</div>
                <div className="font-extrabold text-gray-900 mt-1">{user?.goalCollege || 'Not selected yet'}</div>
              </div>
            </div>

            {stream && (
              <div className="mt-6">
                <Link
                  to={`/stream/${stream.name.toLowerCase().replace(/\s+/g, '-') }`}
                  className="inline-flex items-center font-extrabold text-sky-700 hover:text-sky-800"
                >
                  Open {stream.name} details →
                </Link>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">Quick study links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickLinks.map((l) => (
                <a
                  key={l.title}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-gray-200 hover:border-sky-300 hover:bg-sky-50 transition-colors"
                >
                  <div className="font-extrabold text-gray-900">📚 {l.title}</div>
                  <div className="text-sm text-gray-600 mt-1">Open YouTube search results</div>
                </a>
              ))}
            </div>

            {(stream || exam) && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="font-extrabold text-gray-900">From your stream data</h3>
                <p className="text-sm text-gray-600 mt-1">We’re using the exam links already defined in your stream content.</p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(stream?.exams || []).slice(0, 6).map((e) => (
                    <a
                      key={e.name}
                      href={e.youtubeLink || getYouTubeSearchUrl(`${e.name} preparation`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-purple-50 border border-gray-100 hover:border-sky-200 transition-colors"
                    >
                      <div className="font-extrabold text-gray-900">🎯 {e.name}</div>
                      <div className="text-sm text-gray-600 mt-1 line-clamp-2">{e.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {!user?.selectedStream && (
              <div className="mt-8 p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <div className="font-extrabold text-amber-900">Pick a stream to personalize this page</div>
                <div className="text-sm text-amber-800 mt-1">Go to Explore → Browse streams → choose one.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Libraries

