import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function BaseCreateAccount() {
  return (
    <div className='flex flex-col justify-between flex-grow'>
      <Outlet />
      <p className='text-center text-black'>
        Already have an account?&nbsp;
        <Link to='/login' className='font-bold'>Sign In</Link>
      </p>
    </div>
  )
}

export default BaseCreateAccount