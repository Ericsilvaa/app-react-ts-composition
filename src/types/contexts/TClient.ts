import { PropsWithChildren } from 'react'
import { UserType, UserWithId } from '../TUser'

type returnCreateItem = {
  id: number
  data?: UserWithId[]
  success: boolean
}

export interface ClientContextType {
  items: UserWithId[]
  updateItem: (id: number, updatedItem: UserWithId) => returnCreateItem
  createItem: (items: UserType[], client: UserWithId) => returnCreateItem
  readItems: () => void
  deleteItem: (id: number) => void
  getById: (id: number) => void
  isClientEdit: UserWithId | null
  clearClientEdit: () => void
}

export interface ProviderProps extends PropsWithChildren {}
