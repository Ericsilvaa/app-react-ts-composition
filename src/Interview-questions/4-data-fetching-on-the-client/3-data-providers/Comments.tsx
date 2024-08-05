import { useComments } from './contexts/CommentsContext'
import './styles/styles.css'

const Comments = () => {
  const comments = useComments()
  return (
    <div className='comments'>
      <ul>
        {comments?.map(({ id, comment }) => (
          <li key={id}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
