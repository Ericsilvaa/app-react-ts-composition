export type UserType = {
  nome: string
  email: string
  celular: string
  cidade: string
}

export type UserWithId = UserType & { id: number }
