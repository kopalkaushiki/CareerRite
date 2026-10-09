import { Link } from 'react-router-dom'
import { streamsData } from '../data/streamsData'
import { STREAM_TRAITS } from '../data/quizData'

const slug = (name) => name.toLowerCase().replace(/\s+/g, '-')
const medals = ['🥇', '🥈', '🥉']

const QuizResults = ({ topStreams, takenAt, onRetake }) => (
  <div className="space-y-6">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Top Career Matches</h1>
      <p className="text-gray-600">
        Based on your answers, these paths fit you best
        {takenAt ? ` (taken ${new Date(takenAt).toLocaleDateString()})` : ''}.
      </p>
    </div>

    {topStreams.map((t, i) => {
      const stream = streamsData.find((s) => s.name === t.stream)
      return (
        <div key={t.stream} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">{stream?.icon || medals[i]}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {medals[i]} {t.stream}
                </h2>
                <span className="text-lg font-semibold text-sky-600">{t.match}% match</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-3">
                <div
                  className="bg-gradient-to-r from-sky-500 to-purple-500 h-full rounded-full"
                  style={{ width: `${t.match}%` }}
                />
              </div>
              <p className="text-gray-600 mb-4">{STREAM_TRAITS[t.stream]}</p>
              <Link
                to={`/stream/${slug(t.stream)}`}
                className="inline-block bg-gradient-to-r from-sky-500 to-purple-500 text-white py-2 px-5 rounded-lg font-semibold"
              >
                Explore {t.stream}
              </Link>
            </div>
          </div>
        </div>
      )
    })}

    <p className="text-sm text-gray-500 text-center">
      This quiz is a guide, not a verdict. Explore each stream, talk to teachers and family, and retake it any time.
    </p>
    <div className="text-center">
      <button
        onClick={onRetake}
        className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
      >
        Retake quiz
      </button>
    </div>
  </div>
)

export default QuizResults
