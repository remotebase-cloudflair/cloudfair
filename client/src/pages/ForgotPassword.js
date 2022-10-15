import React, { useState } from 'react'
import InputField from '../components/InputField'
import Modal from '../components/Modal'

import mailIllustration from '../assets/mail.png'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [ showModal, setShowModal ] = useState(false)
  const [ email, setEmail ] = useState('')

  const getCensoredEmail = (email) => {
    const [ mail, domain ] = email.split('@')
    return mail.slice(0, 2) + Array(mail.length-2).fill('*').join('') + '@' + domain
  }

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
              e.preventDefault()
              setShowModal(true)
            }}
            className='space-y-4'
          >
            <InputField
              label="Email Address"
              placeholder='Enter email address'
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className='bg-primary text-white p-2 w-full rounded-md' type="submit">Submit</button>
          </form>
        </div>
      </div>
      {
        showModal ?
          <Modal isOpen={showModal}>
            <div className='flex flex-col space-y-8 p-16 max-w-md items-center text-center'>
              <img src={mailIllustration} alt="" className='w-40' />
              <h2 className='text-4xl'>Done!</h2>
              <p>Link to set new password has been sent to {getCensoredEmail(email)}</p>
              <Link className='bg-primary text-white p-2 rounded-md w-64' to='/login'>
                Open Mail
              </Link>
            </div>
          </Modal>
        :
        null
      }
    </>
  )
}

export default ForgotPassword