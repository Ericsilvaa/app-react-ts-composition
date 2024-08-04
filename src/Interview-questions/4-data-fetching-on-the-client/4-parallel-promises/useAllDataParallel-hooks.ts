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
      fetch(sidebarUrl)
        .then((r) => r.json())
        .then((r) => setSidebar(r))
      fetch(issueUrl)
        .then((r) => r.json())
        .then((r) => setIssue(r))
      fetch(commentsUrl)
        .then((r) => r.json())
        .then((r) => setComments(r))
    }

    dataFetch()
  }, [])

  return { sidebar, comments, issue }
}
