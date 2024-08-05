import React from 'react'
import { IssueType, issueUrl } from '../../shared/api/data'
import { IContextProps } from './types'

const IssueContext = React.createContext<IssueType | undefined>({} as IssueType)

export const IssueDataProvider = ({ children }: IContextProps) => {
  const [issue, setIssue] = React.useState<IssueType>()

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${issueUrl}`)
      const data = await response.json()
      setIssue(data)
    }
    fetchData()
  }, [])
  return <IssueContext.Provider value={issue}>{children}</IssueContext.Provider>
}
export const useIssue = () => React.useContext(IssueContext)
