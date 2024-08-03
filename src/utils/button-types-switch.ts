import { handleClickType } from '../types/components/TTable'

type buttonActionsType = {
  [key: string]: () => void
}

const handleClick = ({ clientId, id, onClick }: handleClickType) => {
  const actions: buttonActionsType = {
    editar: () => onClick({ id, clientId }),
    excluir: () => onClick({ id, clientId }),
    cancelar: () => onClick()
  }

  return actions[id]()
}

export { handleClick }
