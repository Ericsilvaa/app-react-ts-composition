const Step3 = () => {
  // address
  return (
    <>
      <div>
        <label htmlFor='street'>Street:</label>
        <input type='text' id='street' name='street' />
      </div>
      <div>
        <label htmlFor='number'>Number:</label>
        <input type='text' id='number' name='number' />
      </div>
      <div>
        <label htmlFor='city'>City:</label>
        <input type='text' id='city' name='city' />
      </div>
      <div>
        <label htmlFor='state'>State:</label>
        <input type='text' id='state' name='state' />
      </div>
    </>
  )
}

export default Step3
