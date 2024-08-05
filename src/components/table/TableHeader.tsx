import { columnsTable } from '../../constants/data-table'
import './records.css'

const TableHeaderItem = ({ column }: { column: string }) => {
  return (
    <th className='th-header'>
      <span>{column}</span>
    </th>
  )
}

const TableHeader = () => {
  return (
    <thead className='table-header'>
      <tr className='tr-records'>
        {columnsTable.map((column: string, index: number) => (
          <TableHeaderItem key={index} column={column} />
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
