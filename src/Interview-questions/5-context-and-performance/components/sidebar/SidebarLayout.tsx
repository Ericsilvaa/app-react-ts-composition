import { ReactNode } from 'react'
import { useNavigation } from '../../context/NavigationController'

type Props = {
  children: ReactNode
}

const SidebarLayout = ({ children }: Props) => {
  const { isNavExpanded } = useNavigation()
  return (
    <div className='left' style={{ flexBasis: isNavExpanded ? '50%' : '20%' }}>
      {children}
    </div>
  )
}

export default SidebarLayout
