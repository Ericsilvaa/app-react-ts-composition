import { createContext, useEffect, useState } from 'react'
import { ClientContextType, ProviderProps } from '../../types/contexts/TClient'
import { UserType, UserWithId } from '../../types/TUser'
import {
  createClient,
  deleteClientById,
  readClient,
  updateClient
} from '../../utils/crud-utils'

export const ClientContext = createContext<ClientContextType | null>(null)

export const ClientProvider = ({ children }: ProviderProps) => {
  const [isClientEdit, setIsClientEdit] = useState<UserWithId | null>(null)
  const [items, setItems] = useState<UserWithId[]>([])

  const getById = (id: number) => {
    const client = items.find((item) => item.id === id)

    if (!client) return

    setIsClientEdit(client)
  }

  const readItems = () => {
    const savedItems = readClient()
    setItems(savedItems)
  }

  const createItem = (item: UserType) => {
    const { data, id } = createClient(items, item)

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
      setItems(updateClient(index, items, updatedItem))

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
    deleteClientById(id)
    readItems()
  }

  const clearClientEdit = () => {
    setIsClientEdit(null)
  }

  useEffect(() => {
    const savedItems = readClient()
    setItems(savedItems)
  }, [])

  const value: ClientContextType = {
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

// const updateItem = (id, updatedItem) => {
//   const index = items.findIndex((item) => item.id === id)
//   if (index !== -1) {
//     const updatedItems = [...items]
//     updatedItems[index] = { ...updatedItems[index], ...updatedItem }
//     updateClient(index, updatedItems[index])
//     setItems(updatedItems)

//     return {
//       id,
//       success: true
//     }
//   }

//   return {
//     id,
//     success: false
//   }
// }
