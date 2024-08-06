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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='phoneNumber'>Phone Number:</label>
        <input
          type='text'
          id='phoneNumber'
          name='phoneNumber'
          value={data.contact_details.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='alternatePhoneNumber'>Alternate Phone Number:</label>
        <input
          type='text'
          id='alternatePhoneNumber'
          name='alternatePhoneNumber'
          value={data.contact_details.alternatePhoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='contactPreferences'>Contact Preferences:</label>
        <select
          id='contactPreferences'
          name='contactPreferences'
          value={data.contact_details.contactPreferences}
          onChange={handleInputChange}
        >
          <option value='phone'>Phone</option>
          <option value='email'>Email</option>
          <option value='sms'>SMS</option>
        </select>
      </div>
      <button type='submit'>Next</button>
    </form>
  )
}

export default Step4
