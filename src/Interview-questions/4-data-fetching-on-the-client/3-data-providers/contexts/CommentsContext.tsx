import React from 'react'
import { commentsUrl, CommentType } from '../../shared/api/data'
import { IContextProps } from './types'

const CommentsContext = React.createContext<CommentType[] | undefined>([])

export const CommentsDataProvider = ({ children }: IContextProps) => {
  const [comments, setComments] = React.useState<CommentType[]>([])

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${commentsUrl}`)
      const data = await response.json()
      setComments(data)
    }
    fetchData()
  }, [])
  return (
    <CommentsContext.Provider value={comments}>
      {children}
    </CommentsContext.Provider>
  )
}
export const useComments = () => React.useContext(CommentsContext)
