import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import DropZone from '../components/DropZone'
import InputField from '../components/InputField'

function OnBoarding() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, [])

  const navigate = useNavigate()

  const genderOptions = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
    {value: 'others', label: 'Others'},
  ]

  const statusOptions = [
    {value: 'indiviual', label: 'Indiviual'},
    {value: 'family', label: 'Family (1-5)'},
    {value: 'group', label: 'Group (1-5)'},
    {value: 'agency', label: 'Agency'},
  ]

  return (
    <div className='px-4 md:px-8 lg:px-16 pb-4 md:pb-8 lg:pb-16 pt-2 md:pt-4 lg:pt-8 space-y-4 text-black'>
      <h1 className='text-5xl'>Let’s start from the basics</h1>
      <p>First we need to know a few things about you</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          navigate('/dashboard')
        }}
        className='max-w-5xl 2xl:max-w-7xl mx-auto pt-8 space-y-8'
      >
        <div className='w-full flex justify-center items-center'>
          <DropZone onDrop={onDrop} />
        </div>
        <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16'>
          <div className='md:basis-1/2'>
            <InputField
              name='address'
              type='text'
              label="Address"
              placeholder='Enter your address'
              required
            />
          </div>
          <div className='md:basis-1/2'>
            <InputField
              name='gender'
              type='select'
              label="Gender"
              placeholder='Select'
              options={genderOptions}
              required
            />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16'>
          <div className='md:basis-1/2'>
            <InputField
              name='nationality'
              type='text'
              label="Nationality"
              placeholder='Enter your nationalty'
              required
            />
          </div>
          <div className='md:basis-1/2'>
            <InputField
              name='status'
              type='select'
              label="Status"
              placeholder='Select'
              options={statusOptions}
              required
            />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16'>
          <div className='md:basis-1/2'>
            <InputField
              name='phonenumber'
              type='phonenumber'
              label="Phone Number"
              placeholder='Enter your phone number'
              required
            />
          </div>
          <div className='md:basis-1/2'>
            <InputField
              name='location'
              type='text'
              label="Current Location"
              placeholder='Enter your current location'
              required
            />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 justify-center'>
          <button type='submit' className='create-account-link inverted-colors self-center w-full'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default OnBoarding