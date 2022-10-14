import { AuthProvider } from './context/AuthContext'
import { Routes, Route } from "react-router-dom";

// pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
// components
import Footer from './components/Footer'

const App = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<Dashboard />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
