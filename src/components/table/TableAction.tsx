import { TableActionType } from '../../types/components/TTable'
import { handleClick } from '../../utils/button-types-switch'
import CustomButton from '../button/button'

export const TableAction = ({ data }: { data: TableActionType }) => {
  const { id, clientId, onClick } = data

  return (
    <CustomButton
      type={data.type || 'button'}
      id={data.id}
      classNames={`button ${data.color}`}
      onClick={() => handleClick({ id, clientId, onClick })}
    >
      {data.label}
    </CustomButton>
  )
}
