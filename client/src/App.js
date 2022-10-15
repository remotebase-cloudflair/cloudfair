import { AuthContext, AuthProvider } from './context/AuthContext'
import { Routes, Route, Link, Outlet } from "react-router-dom";

// pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
// components
import Footer from './components/Footer'
import CreateAccount from './pages/CreateAccount/BaseCreateAccount';
import { useContext } from 'react';
import NoAuthLayout from './layouts/NoAuthLayout';
import OnBoarding from './pages/OnBoarding';
import WelcomePage from './pages/CreateAccount/WelcomePage';
import BaseCreateAccount from './pages/CreateAccount/BaseCreateAccount';
import VictimCreateAccount from './pages/CreateAccount/VictimCreateAccount';
import VolunteerCreateAccount from './pages/CreateAccount/VolunteerCreateAccount';


const App = () => {

  const user = useContext(AuthContext)

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        { (!user) ?
          <Route element={<NoAuthLayout />}>
            <Route path='/create-account' element={<BaseCreateAccount />}>
              <Route index element={<WelcomePage />} />
              <Route path='victim' element={<VictimCreateAccount />} />
              <Route path='volunteer' element={<VolunteerCreateAccount />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<></>} />
          </Route>
        :
          <>
            <Route path='/welcome' element={<OnBoarding />} />
            <Route path='/home' element={<Dashboard />} />
          </>
        }
      </Routes>
    </AuthProvider>
  );
}

export default App;
