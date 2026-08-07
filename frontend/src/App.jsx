import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { UserProvider, useUser } from './context/UserContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import StreamDetails from './pages/StreamDetails'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Libraries from './pages/Libraries'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser()
  const location = useLocation()

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div></div>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

const AppRoutes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-purple-50">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
        <Route path="/stream/:streamName" element={<ProtectedRoute><StreamDetails /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/libraries" element={<ProtectedRoute><Libraries /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  )
}

export default App


