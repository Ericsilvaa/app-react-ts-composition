import { UserProvider } from '../../context/UserContext'
import ProgressBar from './ProgressBar'
import FormSteps from './steps/FormSteps'

const MultiStepForm = () => {
  return (
    <UserProvider>
      <div className='container flex h-[90vh] items-center justify-center gap-3 bg-gray-100 mt-5 mx-auto rounded-xl '>
        <ProgressBar />
        <FormSteps />
      </div>
    </UserProvider>
  )
}

export default MultiStepForm
