import { TableAction } from '../table/TableAction'
import './button.css'
import { InfoActionsProps } from './types'

const InfoActions = ({ actions, onClick, clientId }: InfoActionsProps) => {
  return (
    <div className='button-actions-container'>
      {actions.map((btn) => {
        const dataValue = { ...btn, onClick, clientId }

        return <TableAction key={btn.id} data={dataValue} />
      })}
    </div>
  )
}

export default InfoActions
