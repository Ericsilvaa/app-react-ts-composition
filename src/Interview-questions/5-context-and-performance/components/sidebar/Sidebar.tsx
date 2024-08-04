import ExpandButton from '../button/ExpandButton'
import SidebarLayout from './SidebarLayout'

const Sidebar = () => {
  return (
    <SidebarLayout>
      {/* this one will control the expand/collapse */}
      <ExpandButton />

      <ul>
        <li>
          <a href='#'>some links</a>
        </li>
      </ul>
    </SidebarLayout>
  )
}
export default Sidebar
