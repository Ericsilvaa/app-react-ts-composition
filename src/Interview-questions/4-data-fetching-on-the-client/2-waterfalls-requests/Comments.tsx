import { useData } from '../shared/api/data'
import '../shared/styles/styles.css'

const CommentsWaterfalls = () => {
  const { data } = useData('https://jsonplaceholder.typicode.com/comments') as {
    data: any[]
  }

  // show loading state while waiting for the data
  if (!data) return 'loading'

  return (
    <div className='comments'>
      <ul>
        {data.map(({ id, comment }) => (
          <li key={id}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}

export default CommentsWaterfalls
