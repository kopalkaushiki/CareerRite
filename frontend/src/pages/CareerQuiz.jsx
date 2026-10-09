import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { questions, computeResults } from '../data/quizData'
import QuizResults from '../components/QuizResults'

const CareerQuiz = () => {
  const { user, saveQuizResult } = useUser()
  const saved = user.quizResult?.topStreams?.length ? user.quizResult : null

  // 'intro' | 'quiz' | 'result'
  const [stage, setStage] = useState(saved ? 'result' : 'intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const [results, setResults] = useState(null)
  const [saveError, setSaveError] = useState('')
  const [saving, setSaving] = useState(false)

  const start = () => {
    setAnswers(Array(questions.length).fill(null))
    setCurrent(0)
    setResults(null)
    setSaveError('')
    setStage('quiz')
  }

  const choose = (idx) => {
    const next = [...answers]
    next[current] = idx
    setAnswers(next)
  }

  const finish = async () => {
    const top = computeResults(answers)
    setResults(top)
    setStage('result')
    setSaving(true)
    setSaveError('')
    try {
      await saveQuizResult(top)
    } catch (err) {
      setSaveError(`Could not save your result: ${err.message}`)
    } finally {
      setSaving(false)
    }
  }

  const q = questions[current]
  const isLast = current === questions.length - 1
  const answeredCount = answers.filter((a) => a !== null).length

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {stage === 'intro' && (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-4">
            <div className="text-5xl">🧭</div>
            <h1 className="text-4xl font-bold text-gray-800">Career Quiz</h1>
            <p className="text-gray-600 text-lg">
              Answer {questions.length} quick questions about what you enjoy and how you work.
              We'll suggest the top 3 career paths that fit you best. It takes about 5 minutes,
              and there are no right or wrong answers.
            </p>
            <button
              onClick={start}
              className="bg-gradient-to-r from-sky-500 to-purple-500 text-white py-3 px-10 rounded-lg font-semibold text-lg"
            >
              Start the quiz
            </button>
          </div>
        )}

        {stage === 'quiz' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {current + 1} of {questions.length}</span>
              <span>{Math.round((answeredCount / questions.length) * 100)}% answered</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-8">
              <div
                className="bg-gradient-to-r from-sky-500 to-purple-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${((current + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{q.q}</h2>
            <div className="space-y-3">
              {q.options.map((o, idx) => (
                <button
                  key={idx}
                  onClick={() => choose(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                    answers[current] === idx
                      ? 'border-sky-500 bg-sky-50 text-sky-800 font-medium'
                      : 'border-gray-200 hover:border-sky-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {o.text}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrent((c) => c - 1)}
                disabled={current === 0}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold disabled:opacity-40"
              >
                Back
              </button>
              {isLast ? (
                <button
                  onClick={finish}
                  disabled={answeredCount < questions.length}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold disabled:opacity-40"
                >
                  See my results
                </button>
              ) : (
                <button
                  onClick={() => setCurrent((c) => c + 1)}
                  disabled={answers[current] === null}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold disabled:opacity-40"
                >
                  Next
                </button>
              )}
            </div>
            {isLast && answeredCount < questions.length && (
              <p className="text-sm text-gray-500 mt-3 text-right">
                Please answer all questions to see your results.
              </p>
            )}
          </div>
        )}

        {stage === 'result' && (
          <>
            <QuizResults
              topStreams={results || saved.topStreams}
              takenAt={results ? null : saved?.takenAt}
              onRetake={start}
            />
            {saving && <p className="text-sm text-gray-500 text-center mt-4">Saving your result...</p>}
            {saveError && <p className="text-sm text-red-600 text-center mt-4">{saveError}</p>}
          </>
        )}
      </div>
    </div>
  )
}

export default CareerQuiz
