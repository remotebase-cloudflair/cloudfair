import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function BaseCreateAccount() {
  return (
    <div className='flex flex-col '>
      <Outlet />
      <p className='text-center text-dark-500'>
        Already have an account?&nbsp;
        <Link to='/login' className='font-semibold'>Sign In</Link>
      </p>
    </div>
  )
}

export default BaseCreateAccount