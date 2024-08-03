import './records.css'

interface TableInfoProps {
  infos: JSX.Element
  action: JSX.Element
}

const TableInfo = ({ infos, action }: TableInfoProps) => {
  return (
    <td className='tr-records'>
      {infos && infos}
      {action && action}
    </td>
  )
}

export default TableInfo
