import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../components/InputField'

function CreateAccount() {
  return (
    <div className='flex flex-col space-y-4 w-full'>
      {/* header */}
      <h1 className='text-4xl mt-32'>Create Account</h1>
      {/* google sign in */}
      <button
        class="flex w-full justify-center rounded-md border border-lightGray bg-white p-1 text-black sm:p-2"
        onClick={() => {}}
      >
        <img
          src="https://freesvg.org/img/1534129544.png"
          className="mr-2 w-6 object-fill"
        />
        Register with Google
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
          label="Full Name"
          placeholder='Enter full name'
          name='fullname'
          type='text'
          required
        />
        <InputField
          label="Email Address"
          placeholder='Enter email address'
          name='email'
          type='email'
          required
        />
        <InputField
          label="Create Password"
          placeholder='Enter password'
          name='password'
          type='password'
          required
        />
        <InputField
          label="Confirm Password"
          placeholder='Re-enter password'
          name='cpassword'
          type='password'
          required
        />
        <div className='space-x-2'>
          <input type="checkbox" name="terms" />
          <label for="terms">I have read and accepted the <button type='button' className='text-secondary'>Terms and Conditions</button></label>
        </div>
        <button className='bg-primary text-white p-2 w-full rounded-md' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateAccount