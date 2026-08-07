import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import StreamCard from '../components/StreamCard'
import { streamsData } from '../data/streamsData'

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Which activity sounds most enjoyable to you?',
    options: {
      A: 'Solving puzzles or coding problems',
      B: 'Designing posters, videos, or interfaces',
      C: 'Leading a team or organizing events',
      D: 'Helping people solve personal problems'
    }
  },
  {
    id: 2,
    question: 'When working on a project, you usually:',
    options: {
      A: 'Focus on logic and technical details',
      B: 'Focus on creativity and presentation',
      C: 'Coordinate people and deadlines',
      D: 'Ensure everyone feels comfortable and included'
    }
  },
  {
    id: 3,
    question: 'Which school subject interests you the most?',
    options: {
      A: 'Mathematics or Computer Science',
      B: 'Art or Literature',
      C: 'Business or Economics',
      D: 'Biology or Psychology'
    }
  },
  {
    id: 4,
    question: 'How do you react to challenges?',
    options: {
      A: 'Analyze and solve them systematically',
      B: 'Think of creative alternatives',
      C: 'Take charge and make decisions',
      D: 'Seek support and collaboration'
    }
  },
  {
    id: 5,
    question: 'What motivates you the most?',
    options: {
      A: 'Innovation and problem-solving',
      B: 'Self-expression and creativity',
      C: 'Success and leadership',
      D: 'Making a positive impact on others'
    }
  },
  {
    id: 6,
    question: 'Which environment would you prefer working in?',
    options: {
      A: 'Tech lab or software company',
      B: 'Design studio or media agency',
      C: 'Corporate office or startup',
      D: 'Hospital, school, or counseling center'
    }
  },
  {
    id: 7,
    question: 'What do your friends usually compliment you for?',
    options: {
      A: 'Intelligence and logical thinking',
      B: 'Creativity and imagination',
      C: 'Confidence and leadership',
      D: 'Kindness and empathy'
    }
  },
  {
    id: 8,
    question: 'Which task would you enjoy the most?',
    options: {
      A: 'Building an app',
      B: 'Editing a video',
      C: 'Managing a business campaign',
      D: 'Teaching or mentoring someone'
    }
  },
  {
    id: 9,
    question: 'How comfortable are you with public speaking?',
    options: {
      A: 'Only when necessary',
      B: 'If it involves presenting creative ideas',
      C: 'Very comfortable',
      D: 'Comfortable in supportive discussions'
    }
  },
  {
    id: 10,
    question: 'What kind of problems do you enjoy solving?',
    options: {
      A: 'Technical or analytical problems',
      B: 'Creative or visual problems',
      C: 'Business or strategic problems',
      D: 'Human or emotional problems'
    }
  },
  {
    id: 11,
    question: 'Which tool would you rather learn?',
    options: {
      A: 'Programming software',
      B: 'Graphic design software',
      C: 'Marketing or analytics tools',
      D: 'Counseling or teaching techniques'
    }
  },
  {
    id: 12,
    question: 'How do you prefer learning new things?',
    options: {
      A: 'Through practice and experimentation',
      B: 'Through creative exploration',
      C: 'Through teamwork and discussion',
      D: 'Through observation and understanding people'
    }
  },
  {
    id: 13,
    question: 'Which career sounds most exciting?',
    options: {
      A: 'Software Engineer or Data Scientist',
      B: 'UI/UX Designer or Animator',
      C: 'Entrepreneur or Manager',
      D: 'Psychologist or Teacher'
    }
  },
  {
    id: 14,
    question: 'What best describes your decision-making style?',
    options: {
      A: 'Logical and data-driven',
      B: 'Intuitive and imaginative',
      C: 'Confident and goal-oriented',
      D: 'Thoughtful and people-focused'
    }
  },
  {
    id: 15,
    question: 'In group projects, your role is usually:',
    options: {
      A: 'Technical expert',
      B: 'Creative contributor',
      C: 'Team leader',
      D: 'Supportive communicator'
    }
  },
  {
    id: 16,
    question: 'Which achievement would make you happiest?',
    options: {
      A: 'Creating innovative technology',
      B: 'Producing inspiring creative work',
      C: 'Building a successful company',
      D: 'Improving someone’s life'
    }
  },
  {
    id: 17,
    question: 'Which activity would you choose during free time?',
    options: {
      A: 'Coding or solving brain games',
      B: 'Drawing, writing, or editing',
      C: 'Networking or planning ideas',
      D: 'Volunteering or helping others'
    }
  },
  {
    id: 18,
    question: 'What type of work schedule appeals to you?',
    options: {
      A: 'Flexible independent work',
      B: 'Creative and dynamic work',
      C: 'Fast-paced leadership environment',
      D: 'Stable and meaningful work'
    }
  },
  {
    id: 19,
    question: 'How important is financial success to you?',
    options: {
      A: 'Important alongside innovation',
      B: 'Less important than creativity',
      C: 'Extremely important',
      D: 'Important, but helping people matters more'
    }
  },
  {
    id: 20,
    question: 'Which statement best describes you?',
    options: {
      A: '“I love solving complex problems.”',
      B: '“I love expressing ideas creatively.”',
      C: '“I enjoy leading and making decisions.”',
      D: '“I care deeply about people and society.”'
    }
  }
]

const RESULT_MAP = {
  A: {
    title: 'Technology & Engineering',
    careers: ['Software Developer', 'AI Engineer', 'Cybersecurity Analyst', 'Data Scientist', 'Game Developer'],
    suggestedStreams: ['Engineering', 'Science & Research']
  },
  B: {
    title: 'Creative & Design Careers',
    careers: ['UI/UX Designer', 'Graphic Designer', 'Animator', 'Content Creator', 'Film & Media Professional'],
    suggestedStreams: ['Design', 'Arts & Humanities']
  },
  C: {
    title: 'Business & Leadership Careers',
    careers: ['Entrepreneur', 'Product Manager', 'Marketing Specialist', 'Business Analyst', 'HR Manager'],
    suggestedStreams: ['MBA', 'Others']
  },
  D: {
    title: 'Social & Helping Careers',
    careers: ['Psychologist', 'Teacher', 'Counselor', 'Social Worker', 'Healthcare Professional'],
    suggestedStreams: ['Medical', 'Arts & Humanities']
  }
}

const getYouTubeCollegeSearchUrl = (collegeName) => {
  const q = `${collegeName} campus tour review`
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`
}

const Explore = () => {
  const navigate = useNavigate()
  const { addVisitedPage, updateUser, user } = useUser()

  const [activeSection, setActiveSection] = useState('quiz') // quiz | colleges | streams

  const [quizAnswers, setQuizAnswers] = useState(() => user?.quizAnswers || {})
  const [showQuizResult, setShowQuizResult] = useState(Boolean(user?.quizResultKey))

  const [collegeStreamName, setCollegeStreamName] = useState(user?.selectedStream || '')
  const [selectedCollege, setSelectedCollege] = useState(null)

  useEffect(() => {
    addVisitedPage('explore')
  }, [])

  const quizCounts = useMemo(() => {
    const counts = { A: 0, B: 0, C: 0, D: 0 }
    Object.values(quizAnswers || {}).forEach((v) => {
      if (counts[v] !== undefined) counts[v] += 1
    })
    return counts
  }, [quizAnswers])

  const quizResultKey = useMemo(() => {
    const entries = Object.entries(quizCounts)
    const total = entries.reduce((sum, [, v]) => sum + v, 0)
    if (total === 0) return ''
    const max = Math.max(...entries.map(([, v]) => v))
    const winners = entries.filter(([, v]) => v === max).map(([k]) => k)
    if (winners.length === 1) return winners[0]
    return 'MIXED'
  }, [quizCounts])

  const quizResult = useMemo(() => {
    if (!quizResultKey) return null
    if (quizResultKey === 'MIXED') {
      return {
        title: 'Mixed Answers',
        careers: ['Product Design', 'Technical Marketing', 'EdTech', 'Human-Computer Interaction', 'Startup Roles', 'Consulting'],
        suggestedStreams: ['Engineering', 'Design', 'MBA', 'Arts & Humanities']
      }
    }
    return RESULT_MAP[quizResultKey]
  }, [quizResultKey])

  const totalAnswered = useMemo(() => Object.keys(quizAnswers || {}).length, [quizAnswers])

  const handleSelectQuizOption = (questionId, optionKey) => {
    setQuizAnswers((prev) => ({
      ...(prev || {}),
      [questionId]: optionKey
    }))
  }

  const handleResetQuiz = () => {
    setQuizAnswers({})
    setShowQuizResult(false)
    updateUser({ quizAnswers: {}, quizResultKey: '', quizCounts: { A: 0, B: 0, C: 0, D: 0 } })
  }

  const handleSubmitQuiz = async () => {
    setShowQuizResult(true)
    await updateUser({
      quizAnswers,
      quizResultKey,
      quizCounts
    })

    if (quizResult?.suggestedStreams?.length) {
      setCollegeStreamName((prev) => prev || quizResult.suggestedStreams[0])
    }
  }

  const collegeStream = useMemo(() => {
    if (!collegeStreamName) return null
    return streamsData.find((s) => s.name === collegeStreamName) || null
  }, [collegeStreamName])

  const handleSetGoalCollege = async (collegeName) => {
    await updateUser({
      goalCollege: collegeName,
      selectedStream: collegeStreamName || user?.selectedStream || ''
    })
    setSelectedCollege(null)
  }

  const suggestedStreamCards = useMemo(() => {
    const names = quizResult?.suggestedStreams || []
    return names.map((n) => streamsData.find((s) => s.name === n)).filter(Boolean)
  }, [quizResult])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Explore</h1>
          <p className="text-lg text-gray-600">Take a quick quiz, explore colleges, and build your goal.</p>
        </div>

        {/* Section Switcher */}
        <div className="bg-white rounded-2xl shadow-md p-2 flex flex-col sm:flex-row gap-2 mb-10">
          <button
            onClick={() => setActiveSection('quiz')}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-colors ${
              activeSection === 'quiz' ? 'bg-sky-50 text-sky-700' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Careers / Streams Quiz
          </button>
          <button
            onClick={() => setActiveSection('colleges')}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-colors ${
              activeSection === 'colleges' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Colleges & Goal
          </button>
          <button
            onClick={() => setActiveSection('streams')}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-colors ${
              activeSection === 'streams' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Browse All Streams
          </button>
        </div>

        {/* 1) Quiz */}
        {activeSection === 'quiz' && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Find your best-fit area</h2>
                <p className="text-gray-600 mt-1">Answer 20 quick questions. We’ll suggest career directions and streams.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold text-gray-600">
                  {totalAnswered}/{QUIZ_QUESTIONS.length} answered
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q) => {
                const selected = quizAnswers?.[q.id]
                return (
                  <div key={q.id} className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-bold text-gray-900">
                        {q.id}. {q.question}
                      </h3>
                      {selected && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                          Selected: {selected}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {Object.entries(q.options).map(([key, label]) => {
                        const isSelected = selected === key
                        return (
                          <button
                            key={key}
                            onClick={() => handleSelectQuizOption(q.id, key)}
                            className={`text-left px-4 py-3 rounded-xl border transition-all ${
                              isSelected
                                ? 'border-sky-300 bg-sky-50 text-sky-900 shadow-sm'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800'
                            }`}
                          >
                            <div className="font-extrabold text-sm">{key}</div>
                            <div className="text-sm mt-1">{label}</div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-gray-600">
                Your current split: <span className="font-bold">A</span> {quizCounts.A}, <span className="font-bold">B</span> {quizCounts.B},{' '}
                <span className="font-bold">C</span> {quizCounts.C}, <span className="font-bold">D</span> {quizCounts.D}
              </div>
              <button
                onClick={handleSubmitQuiz}
                disabled={totalAnswered < QUIZ_QUESTIONS.length}
                className={`px-6 py-3 rounded-2xl font-extrabold transition-all ${
                  totalAnswered < QUIZ_QUESTIONS.length
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-sky-500 to-purple-500 text-white hover:from-sky-600 hover:to-purple-600 shadow-md hover:shadow-lg'
                }`}
              >
                Show Results
              </button>
            </div>

            {showQuizResult && quizResult && (
              <div className="mt-10 border-t border-gray-100 pt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 bg-gradient-to-br from-sky-50 via-white to-purple-50 border border-gray-100 rounded-3xl p-6">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">Result: {quizResult.title}</h3>
                    <p className="text-gray-700 font-semibold mb-4">Recommended careers</p>
                    <div className="flex flex-wrap gap-2">
                      {quizResult.careers.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold">
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          setActiveSection('colleges')
                          if (quizResult?.suggestedStreams?.[0]) setCollegeStreamName(quizResult.suggestedStreams[0])
                        }}
                        className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-extrabold hover:bg-gray-800 transition-colors"
                      >
                        Explore colleges for this
                      </button>
                      <Link
                        to="/libraries"
                        className="px-5 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 font-extrabold hover:bg-gray-50 transition-colors text-center"
                      >
                        Open Libraries
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-extrabold text-gray-900 mb-4">Suggested streams</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {suggestedStreamCards.map((stream) => (
                        <StreamCard key={stream.name} stream={stream} />
                      ))}
                    </div>
                    {!suggestedStreamCards.length && (
                      <p className="text-gray-600">Take the quiz to get stream suggestions.</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2) Colleges & Goal */}
        {activeSection === 'colleges' && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Explore colleges and set your goal</h2>
                <p className="text-gray-600 mt-1">
                  Pick a stream, browse recommended colleges, open YouTube tours, and set your goal college.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/profile')}
                  className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-extrabold hover:bg-gray-800 transition-colors"
                >
                  View in Profile
                </button>
                <Link
                  to="/libraries"
                  className="px-5 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 font-extrabold hover:bg-gray-50 transition-colors text-center"
                >
                  Open Libraries
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-1 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <label className="block text-xs font-extrabold text-gray-600 uppercase tracking-wider mb-2">Select stream</label>
                <select
                  value={collegeStreamName}
                  onChange={(e) => setCollegeStreamName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none bg-white font-semibold text-gray-800"
                >
                  <option value="">Choose a stream...</option>
                  {streamsData.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.icon} {s.name}
                    </option>
                  ))}
                </select>

                <div className="mt-5 space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-gray-200">
                    <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Current goal college</div>
                    <div className="font-bold text-gray-900 mt-1">{user?.goalCollege || 'Not set yet'}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-200">
                    <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Selected stream</div>
                    <div className="font-bold text-gray-900 mt-1">{user?.selectedStream || 'Not set yet'}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
                {!collegeStream ? (
                  <div className="h-full flex items-center justify-center text-center p-10 bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
                    <div>
                      <div className="text-4xl mb-3">🏫</div>
                      <p className="text-gray-700 font-bold">Choose a stream to see recommended colleges.</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Tip: take the quiz first if you’re unsure which stream fits you best.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h3 className="text-lg font-extrabold text-gray-900">
                        Recommended colleges for {collegeStream.icon} {collegeStream.name}
                      </h3>
                      <Link
                        to={`/stream/${collegeStream.name.toLowerCase().replace(/\s+/g, '-') }#colleges`}
                        className="text-sm font-extrabold text-sky-700 hover:text-sky-800"
                      >
                        Open full stream details →
                      </Link>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-sky-500 to-purple-500 text-white">
                            <th className="p-4 text-left rounded-tl-lg">Rank</th>
                            <th className="p-4 text-left">College</th>
                            <th className="p-4 text-left">Location</th>
                            <th className="p-4 text-left rounded-tr-lg">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(collegeStream.colleges || []).map((c) => (
                            <tr key={`${c.rank}-${c.name}`} className="border-b border-gray-200 hover:bg-sky-50 transition-colors">
                              <td className="p-4 font-bold text-gray-700">#{c.rank}</td>
                              <td className="p-4 text-gray-900 font-semibold">{c.name}</td>
                              <td className="p-4 text-gray-600">{c.location}</td>
                              <td className="p-4">
                                <div className="flex flex-col sm:flex-row gap-2">
                                  <button
                                    onClick={() => setSelectedCollege(c)}
                                    className="px-4 py-2 rounded-xl bg-white border border-gray-200 font-bold text-gray-800 hover:bg-gray-50"
                                  >
                                    View
                                  </button>
                                  <button
                                    onClick={() => handleSetGoalCollege(c.name)}
                                    className="px-4 py-2 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800"
                                  >
                                    Set Goal
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            </div>

            {selectedCollege && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 relative">
                  <button
                    onClick={() => setSelectedCollege(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-extrabold"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                  <div className="mb-4">
                    <h3 className="text-2xl font-extrabold text-gray-900">{selectedCollege.name}</h3>
                    <p className="text-gray-600 mt-1">Rank #{selectedCollege.rank} • {selectedCollege.location}</p>
                  </div>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 border border-gray-100 rounded-2xl p-5">
                    <h4 className="font-extrabold text-gray-900 mb-2">College tour / review</h4>
                    <a
                      href={getYouTubeCollegeSearchUrl(selectedCollege.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-extrabold text-sky-700 hover:text-sky-800"
                    >
                      📺 Open YouTube results
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      This opens a YouTube search so you can pick the best tour/review video.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleSetGoalCollege(selectedCollege.name)}
                      className="px-6 py-3 rounded-2xl bg-gray-900 text-white font-extrabold hover:bg-gray-800"
                    >
                      Set as goal college
                    </button>
                    <Link
                      to="/libraries"
                      className="px-6 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 font-extrabold hover:bg-gray-50 text-center"
                    >
                      Go to Libraries
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3) All streams */}
        {activeSection === 'streams' && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Browse all streams</h2>
              <p className="text-gray-600">Open a stream to see path, exams, and top colleges.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {streamsData.map((stream) => (
                <StreamCard key={stream.name} stream={stream} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Explore



