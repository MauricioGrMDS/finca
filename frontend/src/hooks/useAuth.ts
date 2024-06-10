import { useCallback } from 'react'
import { baseApi } from '../api/apiConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export interface LoginData {
    email: string;
    password: string; 
}

export const useAuth = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const onLogin = useCallback(async (loginData: LoginData) => { 
        const { data }  = await baseApi.post(`/login`, loginData);
        if (data.token){
            localStorage.setItem('token', data.token);
            navigate("/dashboard");
            return
        }
        localStorage.removeItem('token');
        toast.error(data.error, { className: 'danger' });
    }, [navigate])

    const onLogout = useCallback(() => {
        localStorage.removeItem('token');
        navigate("/login");
    }, [navigate])



    return {
        onLogin,
        onLogout,
        token
    }
}
