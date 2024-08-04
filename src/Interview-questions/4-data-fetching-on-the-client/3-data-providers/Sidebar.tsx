import { useSidebar } from './contexts/SidebarContext'
import './styles/styles.css'

const Sidebar = () => {
  const data = useSidebar()

  return (
    <div className='sidebar sidebar-base'>
      <ul>
        {data?.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
