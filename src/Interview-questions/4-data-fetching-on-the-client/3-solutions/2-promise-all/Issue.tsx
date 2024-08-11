import { CommentType, IssueType } from '../shared/api/data'
import '../shared/styles/styles.css'
import Comments from './Comments'

const Issue = ({
  data,
  comments
}: {
  data: IssueType
  comments: CommentType[]
}) => {
  return (
    <div className='issue'>
      <h3>{data.author}</h3>
      <p>{data.description}</p>
      <Comments data={comments} />
    </div>
  )
}

export default Issue
