import { handleClickType } from '../types/components/TTable'

type ActionsType = Record<string, () => void>

const handleClick = ({ clientId, id, onClick }: handleClickType) => {
  const actions = {
    editar: () => onClick({ id, clientId }),
    excluir: () => onClick({ id, clientId }),
    cancelar: () => onClick()
  } as ActionsType

  return actions[id]()
}

export { handleClick }
