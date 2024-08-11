import { CommentType } from '../../shared/api/data'
import '../shared/styles/styles.css'

const Comments = ({ data }: { data?: CommentType[] }) => {
  return (
    <div className='comments'>
      <ul>
        {data?.map(({ id, comment }) => (
          <li key={id}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
