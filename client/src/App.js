import { useContext } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext'
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import NoAuthLayout from './layouts/NoAuthLayout';
import OnBoarding from './pages/OnBoarding';
import WelcomePage from './pages/CreateAccount/WelcomePage';
import BaseCreateAccount from './pages/CreateAccount/BaseCreateAccount';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';

// utils
import ProtectedRoute from './ProtectedRoute'


const App = () => {

  const user = useContext(AuthContext)

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
          <Route element={<NoAuthLayout />}>
            <Route path='/create-account' element={<BaseCreateAccount />}>
              <Route index element={<WelcomePage />} />
              <Route path='victim' element={<CreateAccount />} />
              <Route path='volunteer' element={<CreateAccount />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Route>
          <Route path='/welcome' element={<ProtectedRoute />}>
            <Route index element={<OnBoarding />} />
          </Route>
          <Route path='/dashboard' element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
        <Route path='/*' element={<Navigate to='/' replace={true} />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
