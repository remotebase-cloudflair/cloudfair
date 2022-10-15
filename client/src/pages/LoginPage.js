import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'

function LoginPage() {
  return (
    <div className='flex flex-col space-y-4 mx-8 md:mx-16 w-full'>
      {/* header */}
      <h1 className='text-4xl'>Sign In</h1>
      {/* google sign in */}
      <button
        class="flex w-full justify-center rounded-md border border-lightGray bg-white p-1 text-black sm:p-2"
        onClick={() => {}}
      >
        <img
          src="https://freesvg.org/img/1534129544.png"
          className="mr-2 w-6 object-fill"
        />
        Sign in with Google
      </button>
      {/* or */}
      <p className='py-6 text-center'>Or</p>
      {/* form */}
      <form
        className='space-y-4'
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <InputField
          label="Email Address"
          placeholder='Enter email address'
          name='email'
          type='email'
          required
        />
        <InputField
          label="Password"
          placeholder='Enter password'
          name='password'
          type='password'
          required
        />
        <div className='font-semibold block text-right'>
          <Link to='/forgot-password'>Forgot password?</Link>
        </div>
        <button className='bg-primary text-white p-2 w-full rounded-md' type="submit">Submit</button>
      </form>
      <p className='text-center text-dark-500'>
        Don't have an account?&nbsp;
        <Link to='/create-account' className='text-secondary'>Sign Up</Link>
      </p>
    </div>
  )
}

export default LoginPage