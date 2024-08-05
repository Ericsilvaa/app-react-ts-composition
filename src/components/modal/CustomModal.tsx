import { useModalContext } from '../../hooks/useModalContext'
import FormContainer from '../form/Form'
import './modal.css'
import ModalHeader from './ModalHeader'

const CustomModal = () => {
  const { modalVisible } = useModalContext()

  return (
    <>
      {modalVisible && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <ModalHeader />
            <FormContainer />
          </div>
        </div>
      )}
    </>
  )
}

export default CustomModal
