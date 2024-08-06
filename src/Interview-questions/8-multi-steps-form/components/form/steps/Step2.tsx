import { useFormContext } from '../../../context/useFormContext'

const Step2 = () => {
  const { data, setFieldValue, nextStep } = useFormContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFieldValue('profession_information', name, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='occupation'>Occupation:</label>
        <input
          type='text'
          id='occupation'
          name='occupation'
          value={data.profession_information.occupation}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='company'>Company:</label>
        <input
          type='text'
          id='company'
          name='companyName'
          value={data.profession_information.companyName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='yearsOfExperience'>Years of Experience:</label>
        <input
          type='number'
          id='yearsOfExperience'
          name='yearsOfExperience'
          value={data.profession_information.yearsOfExperience}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='skills'>Skills:</label>
        <input
          type='text'
          id='skills'
          name='skills'
          value={data.profession_information.skills.join(', ')}
          onChange={(e) =>
            setFieldValue(
              'profession_information',
              'skills',
              e.target.value.split(', ')
            )
          }
        />
      </div>
      <button type='submit'>Next</button>
    </form>
  )
}

export default Step2
