import { createContext, useState } from 'react'
import { ContextType, ProviderProps } from '../../types/contexts/TClient'
import { UserType, UserWithId } from '../../types/TUser'
import { api } from '../../utils/crud-utils'

export const ClientContext = createContext<ContextType>(null)

export const ClientProvider = ({ children }: ProviderProps) => {
  const [isClientEdit, setIsClientEdit] = useState<UserWithId | null>(null)
  const [items, setItems] = useState<UserWithId[]>([])

  const getById = (id: number) => {
    const client = items.find((item) => item.id === id)

    if (!client) return

    setIsClientEdit(client)
  }

  const readItems = () => {
    const savedItems = api.read()
    setItems(savedItems)
  }

  const createItem = (item: UserType) => {
    const { data, id } = api.create(items, item)

    if (!data) {
      return {
        id,
        success: false
      }
    }

    setItems(data)

    return {
      id,
      data,
      success: true
    }
  }

  const updateItem = (id: number, updatedItem: UserWithId) => {
    const index = items.findIndex((item) => item.id === id)
    if (index !== -1) {
      setItems(api.update(index, items, updatedItem))

      return {
        id,
        success: true
      }
    }

    return {
      id,
      success: false
    }
  }

  const deleteItem = (id: number) => {
    api.delete(id)
    readItems()
  }

  const clearClientEdit = () => {
    setIsClientEdit(null)
  }

  const value: ContextType = {
    items,
    createItem,
    readItems,
    updateItem,
    deleteItem,
    getById,
    isClientEdit,
    clearClientEdit
  }

  return (
    <ClientContext.Provider {...{ value }}>{children}</ClientContext.Provider>
  )
}
