import './records.css'

export interface TableComponentProps {
  header: JSX.Element
  body: JSX.Element
}

const TableComponent = ({ header, body }: TableComponentProps) => {
  return (
    <table id='tableClient' className='records-container'>
      {header && header}
      {body && body}
    </table>
  )
}

export default TableComponent
