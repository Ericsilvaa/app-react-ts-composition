import { CommentType, IssueType } from '../../shared/api/data'
import '../shared/styles/styles.css'
import Comments from './Comments'

const Issue = ({
  issue,
  comments
}: {
  issue: IssueType
  comments?: CommentType[]
}) => {
  return (
    <div className='issue'>
      <h3>{issue.author}</h3>
      <p>{issue.description}</p>
      <Comments data={comments} />
    </div>
  )
}

export default Issue
