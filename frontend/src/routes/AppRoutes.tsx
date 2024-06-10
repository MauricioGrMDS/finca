import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { HomePage } from '../pages/HomePage'
import { Login } from '../pages/auth/Login'
import { Dashboard } from '../pages/admin/Dashboard'
import { LoginPathValidation } from './LoginPathValidation'

export const AppRoutes = () => {
  return (
    <Router >
      <Routes>
        <Route element={<PrivateRoutes/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
        <Route element={<LoginPathValidation/>}>
            <Route path='/login' element={<Login/>} />
        </Route>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}
