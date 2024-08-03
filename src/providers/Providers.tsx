import {} from 'react'
import { ClientProvider } from '../contexts/client/ClientsContext'
import { ModalProvider } from '../contexts/modal/ModalContext'
import { ProviderProps } from '../types/contexts/TClient'

export const Providers = ({ children }: ProviderProps) => {
  return (
    <ClientProvider>
      <ModalProvider>{children}</ModalProvider>
    </ClientProvider>
  )
}
