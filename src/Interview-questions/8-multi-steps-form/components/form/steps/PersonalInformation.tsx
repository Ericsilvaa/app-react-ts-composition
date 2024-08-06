import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../context/useFormContext'
import { DataForm } from '../../types/TForm'

type FormData = DataForm[`personal_information`]

const PersonalInformation = () => {
  const { setFieldValue, nextStep } = useFormContext()

  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log('data', formData)
    setFieldValue('personal_information', formData)

    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md mx-auto p-4 bg-white shadow-sm rounded-md'
    >
      <div className='mb-4'>
        <label
          htmlFor='fullName'
          className='block text-sm font-medium text-gray-700'
        >
          Full Name
        </label>
        <input
          type='text'
          id='fullName'
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          {...register('fullName')}
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          {...register('email')}
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='birthDate'
          className='block text-sm font-medium text-gray-700'
        >
          Birth Date
        </label>
        <input
          type='date'
          id='birthDate'
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          {...register('birthDate')}
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='gender'
          className='block text-sm font-medium text-gray-700'
        >
          Gender
        </label>
        {/* <select
          id='gender'
          name='gender'
          value={data.personal_information?.gender}
          onChange={handleInputChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select> */}
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Salvar
      </button>
    </form>
  )
}

export default PersonalInformation
