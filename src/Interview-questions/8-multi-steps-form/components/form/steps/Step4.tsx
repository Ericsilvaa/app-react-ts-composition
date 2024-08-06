const Step4 = () => {
  // contact_details
  return (
    <>
      <div className='form-group'>
        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          className='form-control'
          id='phone'
          placeholder='Enter phone'
          name='phone'
          // value={data.contact_details.phone}
          // onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='cellPhone'>Cell Phone</label>
        <input
          type='text'
          className='form-control'
          id='cellPhone'
          placeholder='Enter cell phone'
          name='cellPhone'
          // value={data.contact_details.cellPhone}
          // onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-control'
          id='email'
          placeholder='Enter email'
          name='email'
          // value={data.contact_details.email}
          // onChange={handleChange}
        />
      </div>
    </>
  )
}

export default Step4
