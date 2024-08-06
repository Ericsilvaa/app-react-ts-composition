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
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'
    >
      <div className='mb-4'>
        <label
          htmlFor='occupation'
          className='block text-sm font-medium text-gray-700'
        >
          Occupation
        </label>
        <input
          type='text'
          id='occupation'
          name='occupation'
          value={data.profession_information?.occupation}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='company'
          className='block text-sm font-medium text-gray-700'
        >
          Company
        </label>
        <input
          type='text'
          id='company'
          name='companyName'
          value={data.profession_information?.companyName}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='yearsOfExperience'
          className='block text-sm font-medium text-gray-700'
        >
          Years of Experience
        </label>
        <input
          type='number'
          id='yearsOfExperience'
          name='yearsOfExperience'
          value={data.profession_information?.yearsOfExperience}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='skills'
          className='block text-sm font-medium text-gray-700'
        >
          Skills
        </label>
        <input
          type='text'
          id='skills'
          name='skills'
          value={data.profession_information?.skills.join(', ')}
          onChange={(e) =>
            setFieldValue(
              'profession_information',
              'skills',
              e.target.value.split(', ')
            )
          }
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

export default Step2
