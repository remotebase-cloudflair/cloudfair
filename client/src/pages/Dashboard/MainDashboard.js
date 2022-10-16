import { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'

import staticWeather from '../../assets/weather_banner.png'
import placeholder from '../../assets/avatar_placeholder.jpg'
import ride from '../../assets/icon-ride.png'
import home from '../../assets/icon-home.png'
import meal from '../../assets/icon-meal.png'
import clothing from '../../assets/icon-clothing.png'

function MainDashboard() {

  const { user } = useContext(AuthContext)

  let options
  if (user?.type === 'victim') {
    options = [
      {label: 'Request For Relief Home', image: home},
      {label: 'Request For Free Ride', image: ride},
      {label: 'Request For Free Meal', image: meal},
      {label: 'Request For Free Clothing', image: clothing},
    ]
  }

  return (
    <div className='text-black space-y-8 pb-8'>
      <div className='w-full overflow-hidden'>
        <img src={staticWeather} alt="" className='w-full h-full' />
      </div>
      { user ?
      <>
        <div className='px-8 flex flex-row space-x-4 items-end'>
          <img src={user.profileUrl ? user.profileUrl : placeholder} alt="" className='w-24 h-24 rounded-full' />
          <h2 className='text-3xl'>Hi {user.name},</h2>
        </div>
        <div className='px-8 flex flex-row space-x-4 max-w-5xl xl:max-w-7xl mx-auto w-fit flex-wrap'>
          {options?.map(option => (
            <div className='shadow p-8 w-48 flex flex-col justify-end items-center space-y-4 text-center cursor-pointer'>
              <img src={option.image} />
              <p className='text-black font-semibold'>{option.label}</p>
            </div>
          ))}
        </div>
      </>
      : null
      }
    </div>
  )
}

export default MainDashboard