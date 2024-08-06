import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../context/useFormContext'
import TextInput from '../../input/TextInput'
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
      <TextInput id='fullName' label='Full Name' {...register('fullName')} />
      <TextInput id='email' label='Email' {...register('email')} />
      <TextInput
        id='birthDate'
        type='date'
        label='Birth Date'
        {...register('birthDate')}
      />
      {/* <div className='mb-4'> */}
      {/* <label
          htmlFor='gender'
          className='block text-sm font-medium text-gray-700'
        >
          Gender
        </label> */}
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
      {/* </div> */}
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
