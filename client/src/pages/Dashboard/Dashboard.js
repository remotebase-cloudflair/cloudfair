import React, { useContext } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faMessage, faCircleUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../components/Logo'
import Notifications from './Notifications';
import { AuthContext } from '../../context/AuthContext';

import avatarPlaceholder from '../../assets/avatar_placeholder.jpg'
import MainDashboard from './MainDashboard';

function Dashboard() {

  const classes = ({ isActive }) => {
    const classes = 'text-4xl flex flex-row items-center space-x-4 '
    return classes + (isActive ? 'text-secondary' : 'text-primary')
  }

  const { user, setUser } = useContext(AuthContext)

  return (
    <div className='flex flex-row h-[100vh]'>
      {/* sidebar */}
      <div className='py-4 w-14 group hover:w-64 z-10 ml-4 hover:mr-4 transition-all overflow-x-hidden bg-white flex flex-col justify-between'>
        <nav>
          <div className='w-56 h-16 pl-56 group-hover:pl-0'>
            <Logo className='w-full h-full' />
          </div>
          <ul className='space-y-8'>
            <li>
              <NavLink
                to='/dashboard/home'
                className={classes}
              >
                 <div className='w-10 mr-4 flex justify-center items-center'><FontAwesomeIcon icon={faHome} /></div>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/notifications'
                className={classes}
                >
                  <div className='w-10 mr-4 flex flex-shrink-0 justify-center items-center'><FontAwesomeIcon icon={faBell} /></div>
                  Notifications
                </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/chat'
                className={classes}
                >
                  <div className='w-10 mr-4 flex flex-shrink-0 justify-center items-center'><FontAwesomeIcon icon={faMessage} /></div>
                  Messages
                </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/profile'
                className={classes}
                >
                  <div className='w-10 mr-4 flex flex-shrink-0 justify-center items-center'><FontAwesomeIcon icon={faCircleUser} /></div>
                  Profile
                </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/settings'
                className={classes}
                >
                  <div className='w-10 mr-4 flex flex-shrink-0 justify-center items-center'><FontAwesomeIcon icon={faGear} /></div>
                  Settings
                </NavLink>
            </li>
          </ul>
        </nav>
        <button className='text-4xl flex flex-row items-center space-x-4' onClick={() => setUser(null)}>
          <div className='w-10 mr-4 flex flex-shrink-0 justify-center items-center'><FontAwesomeIcon icon={faRightFromBracket} /></div>
          Logout
        </button>
      </div>
      {/* main container */}
      <div className='flex-grow flex flex-col'>
        {/* topbar */}
        <div className="bg-primary text-white p-2 flex flex-row justify-end">
          { user ?
            <div className='space-x-4 flex flex-row items-center'>
              <p className='font-bold'>{user.name}</p>
              <img className='w-10 h-10 rounded-full' src={user.profileUrl ? user.profileUrl : avatarPlaceholder} />
            </div>
            : null
          }
        </div>
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route index element={<Navigate to='/dashboard/home' />} />
            <Route index path='/home' element={<MainDashboard />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/chat' element={<>Chat</>} />
            <Route path='/profile' element={<>Profile</>} />
            <Route path='/settings' element={<>Settings</>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Dashboard