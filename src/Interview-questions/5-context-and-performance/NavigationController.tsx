import React, {
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

import './styles/styles.css'

export const ContextNavigation = React.createContext({
  isNavExpanded: false,
  toggle: () => {},
  close: () => {},
  open: () => {}
})

const NavigationController = ({ children }: { children: ReactNode }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const toggle = useCallback(() => {
    setIsNavExpanded(!isNavExpanded)
  }, [isNavExpanded])

  const open = useCallback(() => {
    setIsNavExpanded(true)
  }, [])
  const close = useCallback(() => {
    setIsNavExpanded(false)
  }, [])

  const value = useMemo(() => {
    return { isNavExpanded, toggle, close, open }
  }, [isNavExpanded, toggle, close, open])

  return (
    <ContextNavigation.Provider value={value}>
      {children}
    </ContextNavigation.Provider>
  )
}

const useNavigation = () => useContext(ContextNavigation)

export { NavigationController, useNavigation }
