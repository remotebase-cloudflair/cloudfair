import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className='flex flex-col'>
      Sign In
      <p className='text-center text-dark-500'>
        Don't have an account?&nbsp;
        <Link to='/create-account' className=''>Sign Up</Link>
      </p>
    </div>
  )
}

export default LoginPage