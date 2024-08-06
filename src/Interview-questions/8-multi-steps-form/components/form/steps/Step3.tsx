import React from 'react'
import { useFormContext } from '../../../context/useFormContext'

const Step3 = () => {
  const { data, setFieldValue, nextStep } = useFormContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFieldValue('address', name, value)
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
          htmlFor='street'
          className='block text-sm font-medium text-gray-700'
        >
          Street
        </label>
        <input
          type='text'
          id='street'
          name='street'
          value={data.address?.street}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='number'
          className='block text-sm font-medium text-gray-700'
        >
          Number
        </label>
        <input
          type='text'
          id='number'
          name='number'
          value={data.address?.number}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='city'
          className='block text-sm font-medium text-gray-700'
        >
          City
        </label>
        <input
          type='text'
          id='city'
          name='city'
          value={data.address?.city}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='state'
          className='block text-sm font-medium text-gray-700'
        >
          State
        </label>
        <input
          type='text'
          id='state'
          name='state'
          value={data.address?.state}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
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

export default Step3
