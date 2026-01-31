import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    class: '',
    goal: '',
    selectedStream: '',
    goalCollege: '',
    visitedPages: []
  })

  useEffect(() => {
    // Load user data from localStorage on mount
    const savedUser = localStorage.getItem('careerRiteUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const updateUser = (userData) => {
    const updatedUser = { ...user, ...userData }
    setUser(updatedUser)
    localStorage.setItem('careerRiteUser', JSON.stringify(updatedUser))
  }

  const addVisitedPage = (page) => {
    const updatedPages = [...new Set([...user.visitedPages, page])]
    updateUser({ visitedPages: updatedPages })
  }

  const calculateProgress = () => {
    // Total pages: 1 (home) + 10 (explore) + 30 (stream details - 10 streams × 3 pages each)
    const totalPages = 41
    return Math.round((user.visitedPages.length / totalPages) * 100)
  }

  return (
    <UserContext.Provider value={{
      user,
      updateUser,
      addVisitedPage,
      calculateProgress
    }}>
      {children}
    </UserContext.Provider>
  )
}


