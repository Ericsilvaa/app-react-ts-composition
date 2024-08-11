import { SidebarType } from '../../shared/api/data'
import '../shared/styles/styles.css'

const Sidebar = ({ data }: { data: SidebarType[] }) => {
  return (
    <div className='sidebar sidebar-base'>
      <ul>
        {data.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
