import { Navigate, useLocation } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useUser()
  const location = useLocation()

  if (loading) {
    return <div className="py-24 text-center text-gray-500">Loading...</div>
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }
  return children
}

export default ProtectedRoute
