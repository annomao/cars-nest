import { Outlet, Navigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

const PrivateRoutes = () => {
  const { auth } = useUser()

  return(
    auth ? <Outlet/> : <Navigate to="/login" replace/>
  )
}

export default PrivateRoutes