import React from 'react'
import { SidebarType, sidebarUrl } from '../../shared/api/data'
import { IContextProps } from './types'

const SidebarContext = React.createContext<SidebarType[] | undefined>([])

export const SidebarDataProvider = ({ children }: IContextProps) => {
  const [sidebar, setSidebar] = React.useState<SidebarType[]>()

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${sidebarUrl}`)
      const data = await response.json()
      setSidebar(data)
    }
    fetchData()
  }, [])
  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  )
}
export const useSidebar = () => React.useContext(SidebarContext)
