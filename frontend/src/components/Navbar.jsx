import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              CareerRite
            </span>
          </Link>
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/explore')
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/profile"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/profile')
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
              }`}
            >
              Profile
            </Link>
            <Link
              to="/libraries"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/libraries')
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
              }`}
            >
              Libraries
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


