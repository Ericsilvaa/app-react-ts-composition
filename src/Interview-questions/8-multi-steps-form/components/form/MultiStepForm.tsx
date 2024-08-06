import { UserProvider } from '../../context/UserContext'
import ProgressBar from './ProgressBar'
import FormSteps from './steps/FormSteps'

const MultiStepForm = () => {
  return (
    <UserProvider>
      <ProgressBar />
      <FormSteps />
    </UserProvider>
  )
}

export default MultiStepForm
