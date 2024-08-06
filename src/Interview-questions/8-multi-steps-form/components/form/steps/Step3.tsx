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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='street'>Street:</label>
        <input
          type='text'
          id='street'
          name='street'
          value={data.address.street}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='number'>Number:</label>
        <input
          type='text'
          id='number'
          name='number'
          value={data.address.number}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='city'>City:</label>
        <input
          type='text'
          id='city'
          name='city'
          value={data.address.city}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='state'>State:</label>
        <input
          type='text'
          id='state'
          name='state'
          value={data.address.state}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit'>Next</button>
    </form>
  )
}

export default Step3
