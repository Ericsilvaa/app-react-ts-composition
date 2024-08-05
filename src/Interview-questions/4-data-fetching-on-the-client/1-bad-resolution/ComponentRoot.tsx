import {
  commentsUrl,
  CommentType,
  IssueType,
  issueUrl,
  SidebarType,
  sidebarUrl,
  useData
} from '../shared/api/data'
import LoadingScreen from '../shared/components/loadings/LoadingScreen'
import '../shared/styles/styles.css'
import Issue from './Issue'
import Sidebar from './Sidebar'

const ComponentRoot = () => {
  const { data: sidebar } = useData<SidebarType[]>(`${sidebarUrl}`)
  const { data: issue } = useData<IssueType>(`${issueUrl}`)
  const { data: comments } = useData<CommentType[]>(`${commentsUrl}`)

  if (!sidebar || !issue || !comments) return <LoadingScreen />

  return (
    <div className='layout'>
      <Sidebar data={sidebar} />
      <Issue data={issue} comments={comments} />
    </div>
  )
}

export default ComponentRoot
