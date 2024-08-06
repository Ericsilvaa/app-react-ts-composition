import React from 'react'
import { useFormContext } from '../../../context/useFormContext'

const Step1 = () => {
  const { data, setFieldValue, nextStep } = useFormContext()

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='fullName'>Full Name:</label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          value={data.personal_information.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={data.personal_information.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='birthDate'>Birth Date:</label>
        <input
          type='date'
          id='birthDate'
          name='birthDate'
          value={data.personal_information.birthDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='gender'>Gender:</label>
        <select
          id='gender'
          name='gender'
          value={data.personal_information.gender}
          onChange={handleInputChange}
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <button type='submit'>Next</button>
    </form>
  )
}

export default Step1
