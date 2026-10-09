import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { api, getToken, setToken } from '../api'

const UserContext = createContext()

const EMPTY_USER = {
  name: '',
  email: '',
  class: '',
  goal: '',
  selectedStream: '',
  goalCollege: '',
  visitedPages: [],
  quizResult: null,
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(EMPTY_USER)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(!!getToken())

  const applyUser = (u) => {
    setUser({ ...EMPTY_USER, ...u })
    setIsAuthenticated(true)
  }

  useEffect(() => {
    if (!getToken()) {
      setLoading(false)
      return
    }

    api('/auth/me')
      .then(({ user }) => applyUser(user))
      .catch((err) => {
        if (err.status === 401) setToken(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const register = async (form) => {
    const { token, user } = await api('/auth/register', { method: 'POST', body: form })
    setToken(token)
    applyUser(user)
  }

  const login = async (email, password) => {
    const { token, user } = await api('/auth/login', { method: 'POST', body: { email, password } })
    setToken(token)
    applyUser(user)
  }

  const logout = () => {
    setToken(null)
    setUser(EMPTY_USER)
    setIsAuthenticated(false)
  }

  const updateUser = useCallback(async (userData) => {
    if (!getToken()) return
    const { user: saved } = await api('/users/me', { method: 'PATCH', body: userData })
    setUser((prev) => ({ ...prev, ...saved }))
    return saved
  }, [])

  const saveQuizResult = useCallback(async (topStreams) => {
    const { user: saved } = await api('/users/me/quiz', { method: 'POST', body: { topStreams } })
    setUser((prev) => ({ ...prev, ...saved }))
    return saved
  }, [])

  const addVisitedPage = useCallback(async (page) => {
    if (!getToken()) return

    let alreadyVisited = false
    setUser((prev) => {
      alreadyVisited = prev.visitedPages.includes(page)
      return alreadyVisited ? prev : { ...prev, visitedPages: [...prev.visitedPages, page] }
    })

    if (alreadyVisited) return

    try {
      await api('/users/me/visits', { method: 'POST', body: { page } })
    } catch {
      // progress tracking is best effort
    }
  }, [])

  const calculateProgress = () => {
    const totalPages = 41
    return Math.min(100, Math.round((user.visitedPages.length / totalPages) * 100))
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        register,
        login,
        logout,
        updateUser,
        saveQuizResult,
        addVisitedPage,
        calculateProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

