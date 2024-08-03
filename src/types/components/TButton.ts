type ClientIdType = number

export type ButtonTypes = 'submit' | 'reset' | 'button' | undefined

export type ButtonNames = 'editar' | 'excluir' | 'salvar' | 'cancelar'

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  classNames?: string
  id: string
}

export type ActionsType = { id: number; name: string }

export type ActionClientType = {
  id: ButtonNames
  clientId: ClientIdType
}

export type DataInfoType = {
  data: {
    id: number
    name: string
    onClick: () => void
    clientId: ClientIdType
  }
}

export type InfoActionsProps = {
  actions: ActionsType[]
  onClick: (data: DataInfoType) => void
  clientId: ClientIdType
}
