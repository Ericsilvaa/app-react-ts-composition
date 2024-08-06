import React from 'react'
import { useFormContext } from '../../../context/useFormContext'

const Step1 = () => {
  const { data, setFieldValue, nextStep } = useFormContext()
  console.log('🚀 ~ Step1 ~ data:', data)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFieldValue('personal_information', name, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-4 bg-white shadow-sm rounded-md'
    >
      <div className='mb-4'>
        <label
          htmlFor='fullName'
          className='block text-sm font-medium text-gray-700'
        >
          Full Name
        </label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          value={data.personal_information?.fullName}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={data.personal_information?.email}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='birthDate'
          className='block text-sm font-medium text-gray-700'
        >
          Birth Date
        </label>
        <input
          type='date'
          id='birthDate'
          name='birthDate'
          value={data.personal_information?.birthDate}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='gender'
          className='block text-sm font-medium text-gray-700'
        >
          Gender
        </label>
        <select
          id='gender'
          name='gender'
          value={data.personal_information?.gender}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
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

export default Step1
