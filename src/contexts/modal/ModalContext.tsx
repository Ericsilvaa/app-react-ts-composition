import { createContext, useState } from 'react'
import { useClientContext } from '../../hooks/useClientContext'
import { ProviderProps } from '../../types/contexts/TClient'
import { ModalContextType } from '../../types/contexts/TModal'

export const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider = ({ children }: ProviderProps) => {
  const [modalVisible, setIsModalVisible] = useState(false)
  const { clearClientEdit } = useClientContext()

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    clearClientEdit()
    setIsModalVisible(false)
  }

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
