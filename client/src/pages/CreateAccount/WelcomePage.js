import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div className='flex flex-col items-center space-y-8 text-black flex-grow justify-center'>
      <div className='text-center px-4 space-y-4'>
        <h1 className='text-4xl font-semibold'>Welcome</h1>
        <p className='text-xl'>To make use of cloudflair, you need to have an account.</p>
      </div>
      <div className="flex flex-row w-full justify-between space-x-16">
        <Link className="create-account-link" to='/create-account/volunteer'>Volunteer</Link>
        <Link className="create-account-link inverted-colors" to='/create-account/victim'>Victim</Link>
      </div>
    </div>
  )
}

export default WelcomePage