import React from 'react'
import { useFormContext } from '../../../context/useFormContext'

const Step4 = () => {
  const { data, setFieldValue, nextStep } = useFormContext()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFieldValue('contact_details', name, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'
    >
      <div className='mb-4'>
        <label
          htmlFor='phoneNumber'
          className='block text-sm font-medium text-gray-700'
        >
          Phone Number
        </label>
        <input
          type='text'
          id='phoneNumber'
          name='phoneNumber'
          value={data.contact_details?.phoneNumber}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='alternatePhoneNumber'
          className='block text-sm font-medium text-gray-700'
        >
          Alternate Phone Number
        </label>
        <input
          type='text'
          id='alternatePhoneNumber'
          name='alternatePhoneNumber'
          value={data.contact_details?.alternatePhoneNumber}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='contactPreferences'
          className='block text-sm font-medium text-gray-700'
        >
          Contact Preferences
        </label>
        <select
          id='contactPreferences'
          name='contactPreferences'
          value={data.contact_details?.contactPreferences}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        >
          <option value='phone'>Phone</option>
          <option value='email'>Email</option>
          <option value='sms'>SMS</option>
        </select>
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Next
      </button>
    </form>
  )
}

export default Step4
