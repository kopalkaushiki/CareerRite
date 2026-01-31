import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import StreamDetails from './pages/StreamDetails'
import Profile from './pages/Profile'

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-purple-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/stream/:streamName" element={<StreamDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App


