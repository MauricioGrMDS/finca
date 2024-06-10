import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth';

export const LoginPathValidation = () => {
    const { token } = useAuth();
    return (
        !token ? <Outlet/> : <Navigate to='/dashboard'/>
      )
}
