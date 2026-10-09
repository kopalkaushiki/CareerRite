import { useNavigate } from 'react-router-dom'

const StreamCard = ({ stream }) => {
  const navigate = useNavigate()

  const handleExplore = () => {
    navigate(`/stream/${stream.name.toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-sky-200 via-purple-200 to-pink-200 flex items-center justify-center">
        <span className="text-4xl">{stream.icon}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{stream.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{stream.description}</p>
        <button
          onClick={handleExplore}
          className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
        >
          Explore
        </button>
      </div>
    </div>
  )
}

export default StreamCard

