import { useFormContext } from '../../../context/useFormContext'
import PersonalInformation from './PersonalInformation'
import ProfessionInformation from './ProfessionInformation'
import ReviewAndConfirmation from './Review'
import Step3 from './Step3'
import Step4 from './Step4'

const FormSteps = () => {
  const { currentStep } = useFormContext()

  return (
    <div className=''>
      {currentStep === 1 && <PersonalInformation />}
      {currentStep === 2 && <ProfessionInformation />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}
      {currentStep === 5 && <ReviewAndConfirmation />}
    </div>
  )
}

export default FormSteps
