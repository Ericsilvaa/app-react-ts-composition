import { useFormContext } from '../../../context/useFormContext'
import ReviewAndConfirmation from './Review'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const FormSteps = () => {
  const { currentStep } = useFormContext()

  return (
    <>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}
      {currentStep === 5 && <ReviewAndConfirmation />}
    </>
  )
}

export default FormSteps
