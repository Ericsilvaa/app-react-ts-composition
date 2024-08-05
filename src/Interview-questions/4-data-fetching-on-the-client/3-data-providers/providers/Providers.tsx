import React from 'react'
import { CommentsDataProvider } from '../contexts/CommentsContext'
import { IssueDataProvider } from '../contexts/IssueContext'
import { SidebarDataProvider } from '../contexts/SidebarContext'

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <SidebarDataProvider>
      <IssueDataProvider>
        <CommentsDataProvider>{children}</CommentsDataProvider>
      </IssueDataProvider>
    </SidebarDataProvider>
  )
}

export default Providers
