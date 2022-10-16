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
        { type === 'select' ?
          <select
            className='relative border w-full border-lightGray bg-white p-2 rounded-md focus-visible:outline-none focus-visible:border-black'
            {...rest}
          >
            <option disabled selected value>Select</option>
            {rest.options.map(op => (
              <option value={op.value} label={op.label} />
            ))}
          </select>
        : type === 'phonenumber' ?
          <div className='flex flex-row space-x-4'>
            <div className='w-20'>
              <select
                name="code"
                className='relative border w-full bg-white border-lightGray p-2 rounded-md focus-visible:outline-none focus-visible:border-black'
              >
                <option value='+922' label='+922' />
              </select>
            </div>
            <div className='flex-grow'>
              <input
                type='tel'
                className='relative border w-full border-lightGray p-2 rounded-md focus-visible:outline-none focus-visible:border-black'
                {...rest}
              />
            </div>
          </div>
        :
          <input
            className='relative border w-full border-lightGray p-2 rounded-md focus-visible:outline-none focus-visible:border-black'
            type={(type!=='password') ? type : (showPassword) ? 'text' : 'password' }
            {...rest}
          />
        }
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