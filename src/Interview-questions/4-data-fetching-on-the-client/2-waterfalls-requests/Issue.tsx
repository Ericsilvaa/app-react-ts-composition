import { IssueType, useData } from '../shared/api/data'
import '../shared/styles/styles.css'
import CommentsWaterfalls from './Comments'

const IssueWaterfalls = () => {
  const { data } = useData('get-issues-url') as { data: IssueType }

  if (!data) return 'loading'

  return (
    <div className='issue'>
      <h3>{data.author}</h3>
      <p>{data.description}</p>
      <CommentsWaterfalls />
    </div>
  )
}

export default IssueWaterfalls
