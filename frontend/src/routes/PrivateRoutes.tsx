import { Navigate, Outlet } from 'react-router'
import { PrivateLayout } from '../layouts/PrivateLayout'
import { useAuth } from '../hooks/useAuth';

export const PrivateRoutes = () => {
    const { token } = useAuth();
    return (
        token ? <PrivateLayout><Outlet/></PrivateLayout> : <Navigate to='/login'/>
      )
}
