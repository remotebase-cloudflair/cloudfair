import React from 'react'
import InputField from '../components/InputField'

function ForgotPassword() {
  return (
    <>
      <div className='flex flex-col flex-grow justify-between w-full py-8 xl:py-16'>
        <div className=''>
          <button>Back</button>
        </div>
        <div className='flex-grow flex flex-col justify-center space-y-8 p-8'>
          <h1 className="text-4xl">Forgot Password?</h1>
          <form
            onSubmit={(e) => {
              e.stopPropagation()
            }}
            className='space-y-4'
          >
            <InputField
              label="Email Address"
              placeholder='Enter email address'
              name='email'
              type='email'
              required
            />
            <button className='bg-primary text-white p-2 w-full rounded-md' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword