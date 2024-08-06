import { useFormContext } from '../../context/useFormContext'

const ProgressBar = () => {
  const { currentStep } = useFormContext()

  const steps = [
    { step: 1, name: 'Personal Information' },
    { step: 2, name: 'Professional Information' },
    { step: 3, name: 'Address' },
    { step: 4, name: 'Contact Details' },
    { step: 5, name: 'Review and Confirmation' }
  ]

  if (currentStep === 5) {
    return null
  }

  return (
    <div className='mb-2'>
      <h1 className='text-xl font-bold mb-2'>Step {currentStep} of 5</h1>
      <div className='relative'>
        <div className='absolute h-full border-l-2 border-gray-300 left-4 top-0 transform -translate-x-1/2'></div>
        <div className='flex flex-col items-start space-y-8'>
          {steps.map(({ step, name }) => (
            <div key={step} className='flex items-center space-x-4'>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {step}
              </div>
              <span className='text-lg'>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
