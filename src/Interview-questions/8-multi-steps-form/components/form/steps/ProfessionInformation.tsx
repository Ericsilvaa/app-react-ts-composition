import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../context/useFormContext'
import { DataForm } from '../../types/TForm'
type FormData = DataForm[`profession_information`]

const ProfessionInformation = () => {
  const { setFieldValue, nextStep } = useFormContext()

  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const dataValue = {
      ...formData,
      skills: (formData.skills as string).split(', ')
    }

    console.log('data', formData)
    setFieldValue('profession_information', dataValue)

    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register('occupation')}
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
          id='companyName'
          {...register('companyName')}
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
          {...register('yearsOfExperience')}
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
          {...register('skills')}
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

export default ProfessionInformation
