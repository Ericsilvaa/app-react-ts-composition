import LoadingIssue from '../../shared/components/loadings/LoadingIssue'
import LoadingScreen from '../../shared/components/loadings/LoadingScreen'
import '../../styles/styles.css'
import { useIssue } from '../contexts/IssueContext'
import { useSidebar } from '../contexts/SidebarContext'
import Issue from '../Issue'
import Sidebar from '../Sidebar'

const ComponentRoot = () => {
  const sidebar = useSidebar()
  const issue = useIssue()

  if (!sidebar) return <LoadingScreen />

  return (
    <div className='layout'>
      <Sidebar />
      {issue ? <Issue /> : <LoadingIssue />}
    </div>
  )
}

export default ComponentRoot
