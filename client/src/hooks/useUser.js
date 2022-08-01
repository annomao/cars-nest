import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'


function useUser() {
  const { auth, setAuth } = useContext(AuthContext)
  return { auth,setAuth }
}

export default useUser