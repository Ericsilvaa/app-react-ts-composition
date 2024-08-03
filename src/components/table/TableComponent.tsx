import React from 'react'
import { useClientContext } from '../../hooks/useClientContext'
import './records.css'

export interface TableComponentProps {
  header: JSX.Element
  body: JSX.Element
}

const TableComponent = ({ header, body }: TableComponentProps) => {
  const { readItems } = useClientContext()

  React.useEffect(() => {
    readItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <table id='tableClient' className='records-container'>
      {header && header}
      {body && body}
    </table>
  )
}

export default TableComponent
