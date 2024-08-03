import { PropsWithChildren } from 'react'
import { UserType, UserWithId } from '../TUser'

export interface ClientContextTypeState {
  items: UserWithId[]
  isClientEdit: UserWithId | null
}

export interface ClientContextTypeActions {
  updateItem: (id: number, updatedItem: UserType) => ReturnDataType
  createItem: (item: UserType) => ReturnDataType
  readItems: () => void
  deleteItem: (id: number) => void
  getById: (id: number) => void
  clearClientEdit: () => void
}

type ClientContextType = ClientContextTypeState & ClientContextTypeActions

export type ContextType = ClientContextType | null

export type ReturnDataType = {
  id: number
  data?: UserWithId[]
  success: boolean
}

export interface ApiCrudType {
  create: (items: UserWithId[], client: UserType) => ReturnDataType
  delete: (id: number) => UserWithId[]
  read: () => UserWithId[]
  update: (
    index: number,
    clients: UserWithId[],
    updatedItem: UserType
  ) => UserWithId[]
}

export interface ProviderProps extends PropsWithChildren {}
