import { columnsTable } from '../../constants/data-table'
import './records.css'
import { TableRowItem } from './TableRowItem'

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
      <TableRowItem classNames='tr-records'>
        {columnsTable.map((column: string, index: number) => (
          <TableHeaderItem key={index} column={column} />
        ))}
      </TableRowItem>
    </thead>
  )
}

export default TableHeader
