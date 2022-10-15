import { useState } from 'react'
import EyeIcon from '../assets/EyeIcon'

function InputField({ label, type, ...rest}) {

  const [ showPassword, setShowPassword ] = useState(false) 

  return (
    <div className='w-full flex flex-col'>
      <label
        htmlFor={rest.name}
        className='w-full'
      >
        {label}
      </label>
      <div className='relative w-full'>
        <input
          className='relative border w-full border-lightGray p-2 rounded-md focus-visible:outline-none focus-visible:border-black'
          type={(type!=='password') ? type : (showPassword) ? 'text' : 'password' }
          {...rest}
        />
        { (type==='password') ?
          <button
            onClick={() => setShowPassword(curr => !curr)}
            type='button'
            className='absolute top-2 right-2 text-lightGray w-8 h-8'
          >
            <EyeIcon show={showPassword} />
          </button>
          :
          null
        }
      </div>
    </div>
  )
}

export default InputField