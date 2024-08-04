import '../../styles/styles.css'
import LoadingIssue from './LoadingIssue'
import LoadingSidebar from './LoadingSidebar'

const LoadingScreen = () => {
  return (
    <div className='layout'>
      <LoadingSidebar />
      <LoadingIssue />
    </div>
  )
}

export default LoadingScreen
