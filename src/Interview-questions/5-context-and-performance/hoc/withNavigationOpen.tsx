import React, { ComponentType, useContext } from 'react'
import { ContextNavigation } from '../context/NavigationController'

export interface WithNavigationOpenProps {
  openNav: () => void
}

const withNavigationOpen = (
  AnyComponent: ComponentType<WithNavigationOpenProps>
) => {
  // wrap the component from the arguments in React.memo here
  const AnyComponentMemo = React.memo(AnyComponent)

  return (props: Omit<WithNavigationOpenProps, 'openNav'>) => {
    const { open } = useContext(ContextNavigation)

    // return memoized component here
    // now it won't re-render because of Context changes
    // make sure that whatever is passed as props here don't change between re-renders!
    return <AnyComponentMemo {...props} openNav={open} />
  }
}

export default withNavigationOpen
