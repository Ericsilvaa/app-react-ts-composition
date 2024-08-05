import { createContext, useCallback, useMemo, useState } from 'react'
import { ProviderProps } from '../../types/contexts/TClient'
import { ModalContextType } from '../../types/contexts/TModal'

export const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider = ({ children }: ProviderProps) => {
  const [modalVisible, setIsModalVisible] = useState(false)

  const openModal = useCallback(() => {
    setIsModalVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalVisible(false)
  }, [])

  const contextValue = useMemo(() => {
    return {
      modalVisible,
      openModal,
      closeModal
    }
  }, [modalVisible])

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}
