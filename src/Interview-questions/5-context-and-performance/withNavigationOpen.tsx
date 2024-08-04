import React, { useContext } from 'react'
import { ContextNavigation } from './NavigationController'

const withNavigationOpen = (AnyComponent: any) => {
  // wrap the component from the arguments in React.memo here
  const AnyComponentMemo = React.memo(AnyComponent)

  return (props: any) => {
    const { open } = useContext(ContextNavigation)

    // return memoized component here
    // now it won't re-render because of Context changes
    // make sure that whatever is passed as props here don't change between re-renders!
    return <AnyComponentMemo {...props} openNav={open} />
  }
}

export default withNavigationOpen
