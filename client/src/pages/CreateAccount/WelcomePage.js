import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div className='mb-8 flex flex-col items-center space-y-4'>
      <h1 className='text-2xl font-bold'>Welcome</h1>
      <div className="flex flex-row w-full justify-between">
        <Link className="create-account-link" to='/create-account/victim'>Victim</Link>
        <Link className="create-account-link" to='/create-account/volunteer'>Volunteer</Link>
      </div>
    </div>
  )
}

export default WelcomePage