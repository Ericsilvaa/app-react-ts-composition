const Step2 = () => {
  // profession_information
  return (
    <>
      <div>
        <label htmlFor='profession'>Profession:</label>
        <input type='text' id='profession' name='profession' />
      </div>
      <div>
        <label htmlFor='company'>Company:</label>
        <input type='text' id='company' name='company' />
      </div>
      <button type='submit'>Next</button>
    </>
  )
}

export default Step2
