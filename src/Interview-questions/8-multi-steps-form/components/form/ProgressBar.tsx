import { useFormContext } from '../../context/useFormContext'

const ProgressBar = () => {
  const { currentStep } = useFormContext()

  return (
    <div>
      <h1>Step {currentStep} of 5</h1>
      <div>
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: step <= currentStep ? 'green' : 'gray'
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
