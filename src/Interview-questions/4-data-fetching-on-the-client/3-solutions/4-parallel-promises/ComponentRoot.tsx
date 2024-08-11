import LoadingIssue from '../../shared/components/loadings/LoadingIssue'
import LoadingScreen from '../../shared/components/loadings/LoadingScreen'
import '../shared/styles/styles.css'
import Issue from './Issue'
import Sidebar from './Sidebar'
import { useAllData } from './useAllDataParallel-hooks'

const ComponentParallelRoot = () => {
  const { sidebar, issue, comments } = useAllData()

  if (!sidebar) return <LoadingScreen />

  return (
    <div className='layout'>
      <Sidebar data={sidebar} />
      {issue ? <Issue comments={comments} issue={issue} /> : <LoadingIssue />}
    </div>
  )
}

export default ComponentParallelRoot
