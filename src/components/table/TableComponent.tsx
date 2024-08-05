import React from 'react'
import { useClientContext } from '../../hooks/useClientContext'
import './records.css'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

export interface TableComponentProps {
  children: React.ReactNode
}

const TableComponent = () => {
  const { readItems } = useClientContext()

  React.useEffect(() => {
    readItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <table id='tableClient' className='records-container'>
      <TableHeader />
      <TableBody />
    </table>
  )
}

export default TableComponent
