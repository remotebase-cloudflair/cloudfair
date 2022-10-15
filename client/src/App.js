import { AuthContext, AuthProvider } from './context/AuthContext'
import { Routes, Route } from "react-router-dom";

// pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
// components
import Footer from './components/Footer'
import CreateAccount from './pages/CreateAccount';
import { useContext } from 'react';
import NoAuthLayout from './layouts/NoAuthLayout';
import OnBoarding from './pages/OnBoarding';


const App = () => {

  const user = useContext(AuthContext)

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        { (!user) ?
          <Route element={<NoAuthLayout />}>
            <Route path='/create-account' element={<CreateAccount />} />
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
