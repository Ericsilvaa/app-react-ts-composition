import { useData } from '../shared/api/data'
import IssueWaterfalls from './Issue'
import SidebarWaterfalls from './Sidebar'

/* 
  Big Problem:
    The app is terribly slow. Slower than all our examples from above!
    This is a classic waterfall of requests.
  
  ! Important
    Only components that are actually
    returned will be mounted, rendered, and as a result, will trigger
    useEffect and data fetching in it.

    In this case, every single component returns a "loading" state while it waits for data.
    And only when data is loaded does it switch to a component next in the render tree  triggers its own data fetching, returns a "loading" state, and the cycle repeats itself


  How to fix it:
    3 ways to fix this:
      1. Promise.all 
      2. Parallel promises
      3. Data Providers to abstract away fetching, making a provider to each 
      component
*/

const ComponentRootWaterfalls = () => {
  const { data } = useData('/get-sidebar') as { data: any[] }
  // show loading state while waiting for the data
  if (!data) return 'loading'

  return (
    <>
      <SidebarWaterfalls data={data} />
      <IssueWaterfalls />
    </>
  )
}

export default ComponentRootWaterfalls
