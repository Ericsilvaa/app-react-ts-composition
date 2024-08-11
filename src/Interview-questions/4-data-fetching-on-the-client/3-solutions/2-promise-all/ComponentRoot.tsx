import LoadingScreen from '../shared/components/loadings/LoadingScreen'
import '../shared/styles/styles.css'
import Issue from './Issue'
import Sidebar from './Sidebar'
import { useAllData } from './useAllData-hooks'

const ComponentPromiseAllRoot = () => {
  const { sidebar, issue, comments } = useAllData()

  if (!sidebar || !issue || !comments) return <LoadingScreen />

  return (
    <div className='layout'>
      <Sidebar data={sidebar} />
      <Issue data={issue} comments={comments} />
    </div>
  )
}

export default ComponentPromiseAllRoot
