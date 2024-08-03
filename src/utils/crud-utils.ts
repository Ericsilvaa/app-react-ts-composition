import { UserType, UserWithId } from '../types/TUser'
import { getLocalStorage, setLocalStorage } from './localstorage-utils'

const readClient = () => getLocalStorage()

const deleteClientById = (id: number) => {
  const dbClient = getLocalStorage()
  const updatedDbClient = dbClient.filter(
    (client: UserWithId) => client.id !== id
  )
  setLocalStorage(updatedDbClient)
  return updatedDbClient
}

const updateClient = (
  index: number,
  clients: UserWithId[],
  updatedItem: UserWithId
) => {
  const updatedItems = [...clients]
  updatedItems[index] = { ...updatedItems[index], ...updatedItem }

  const dbClient = getLocalStorage()
  dbClient[index] = updatedItems[index]
  setLocalStorage(dbClient)

  return updatedItems
}

const createClient = (items: UserType[], client: UserWithId) => {
  const newClient: UserWithId = { ...client, id: Date.now() }

  const dbClient = getLocalStorage()
  dbClient.push(newClient)
  setLocalStorage(dbClient)

  return {
    data: [...items, newClient],
    success: true,
    id: newClient.id
  }
}

export { createClient, deleteClientById, readClient, updateClient }
