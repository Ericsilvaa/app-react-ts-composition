import { ApiCrudType } from '../types/contexts/TClient'
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

const createClient = (items: UserWithId[], client: UserType) => {
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

const api: ApiCrudType = {
  create: createClient,
  delete: deleteClientById,
  read: readClient,
  update: updateClient
}

export { api }
