import Comments from './Comments'
import { useComments } from './contexts/CommentsContext'
import { useIssue } from './contexts/IssueContext'
import './styles/styles.css'

const Issue = () => {
  const issue = useIssue()
  const comments = useComments()

  return (
    <div className='issue'>
      <h3>{issue?.author}</h3>
      <p>{issue?.description}</p>
      {comments ? <Comments /> : <div className='loading issue-loading' />}
    </div>
  )
}

export default Issue
