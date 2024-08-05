import { useClientContext } from '../../hooks/useClientContext'
import TableComponent from '../table/TableComponent'
import TableEmpty from '../table/TableEmpty'
import './MainContainer.css'

const MainContainer = () => {
  const { items } = useClientContext()

  if (!items.length) return <TableEmpty />

  return (
    <div className='main-container'>
      <TableComponent />
    </div>
  )
}

export default MainContainer
