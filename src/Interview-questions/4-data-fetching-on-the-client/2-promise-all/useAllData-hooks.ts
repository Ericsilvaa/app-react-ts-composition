import { useEffect, useState } from 'react'
import {
  commentsUrl,
  CommentType,
  IssueType,
  issueUrl,
  SidebarType,
  sidebarUrl
} from '../shared/api/data'

export const useAllData = () => {
  const [sidebar, setSidebar] = useState<SidebarType[]>()
  const [comments, setComments] = useState<CommentType[]>()
  const [issue, setIssue] = useState<IssueType>()

  useEffect(() => {
    const dataFetch = async () => {
      const result = (
        await Promise.all([
          fetch(sidebarUrl),
          fetch(issueUrl),
          fetch(commentsUrl)
        ])
      ).map((r) => r.json())

      const [sidebarResult, issueResult, commentsResult] = await Promise.all(
        result
      )

      setSidebar(sidebarResult)
      setIssue(issueResult)
      setComments(commentsResult)
    }

    dataFetch()
  }, [])

  return { sidebar, comments, issue }
}
