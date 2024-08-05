import { ButtonTypes } from './TButton'

type IdAndClientId = Pick<TableActionType, 'id' | 'clientId'>

type ClickType = {
  onClick: (data?: IdAndClientId) => void
}

export type TableActionType = {
  id: string
  color: string
  label: string
  onClick: (data?: IdAndClientId) => void
  clientId?: number
  type?: ButtonTypes
}

export type handleClickType = ClickType & IdAndClientId
