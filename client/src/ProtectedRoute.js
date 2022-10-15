import { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

function ProtectedRoute({ children, ...rest}) {
  const user = useContext(AuthContext)

  console.log('reached')

  return (
    <>
      {
        user ?
        <Outlet />
        :
        <Navigate to='/login' replace={true} />
      }
    </>
  )
}

export default ProtectedRoute