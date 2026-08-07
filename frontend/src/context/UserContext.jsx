import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = createContext()

const API_URL = 'http://localhost:5000/api/users'

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('careerRiteUserId')
      if (userId) {
        try {
          const res = await axios.get(`${API_URL}/${userId}`)
          setUser(res.data)
        } catch (error) {
          console.error("Error fetching user:", error)
          localStorage.removeItem('careerRiteUserId')
        }
      }
      setLoading(false)
    }
    fetchUser()
  }, [])

  const loginUser = async (credentials) => {
    try {
      const res = await axios.post(`${API_URL}/login`, credentials)
      setUser(res.data)
      localStorage.setItem('careerRiteUserId', res.data._id)
      return res.data
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  const registerUser = async (userData) => {
    try {
      const res = await axios.post(`${API_URL}/register`, userData)
      setUser(res.data)
      localStorage.setItem('careerRiteUserId', res.data._id)
      return res.data
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    }
  }

  const logoutUser = () => {
    setUser(null)
    localStorage.removeItem('careerRiteUserId')
  }

  const updateUser = async (userData) => {
    if (!user?._id) return

    // Optimistic UI update
    const previousUser = { ...user }
    setUser({ ...user, ...userData })

    try {
      const res = await axios.patch(`${API_URL}/${user._id}`, userData)
      setUser(res.data)
    } catch (error) {
      console.error("Update error:", error)
      setUser(previousUser) // Revert on failure
    }
  }

  const addVisitedPage = async (page) => {
    if (!user) return
    const updatedPages = [...new Set([...(user.visitedPages || []), page])]
    if (updatedPages.length !== user.visitedPages?.length) {
      await updateUser({ visitedPages: updatedPages })
    }
  }

  const calculateProgress = () => {
    if (!user || !user.visitedPages) return 0
    const totalPages = 41
    return Math.round((user.visitedPages.length / totalPages) * 100)
  }

  return (
    <UserContext.Provider value={{
      user,
      loading,
      loginUser,
      registerUser,
      logoutUser,
      updateUser,
      addVisitedPage,
      calculateProgress
    }}>
      {children}
    </UserContext.Provider>
  )
}


