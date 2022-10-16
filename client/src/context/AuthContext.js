import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null)

  const navigate = useNavigate()

  const value = {
    user,
    setUser,
  }

  useEffect(() => {
    const userFromLS = localStorage.getItem('user')
    if (userFromLS) setUser(JSON.parse(userFromLS))
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      if (!(window.location.pathname.includes('login') || window.location.pathname.includes('create-account'))) {
        navigate('/login')
      }
      if (localStorage.getItem('user')) localStorage.removeItem('user')
    }
  }, [user])

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
} 

export {
  AuthContext,
  AuthProvider,
}