import { useIssue } from '../../contexts/IssueContext'
import { useSidebar } from '../../contexts/SidebarContext'
import Issue from '../../Issue'
import Sidebar from '../../Sidebar'
import '../../styles/styles.css'
import LoadingIssue from '../loadings/LoadingIssue'
import LoadingScreen from '../loadings/LoadingScreen'

const ComponentRoot = () => {
  // const { data: sidebar } = useData<SidebarType[]>(`${sidebarUrl}`)
  // const { data: issue } = useData<IssueType>(`${issueUrl}`)
  // const { data: comments } = useData<CommentType[]>(`${commentsUrl}`)

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
