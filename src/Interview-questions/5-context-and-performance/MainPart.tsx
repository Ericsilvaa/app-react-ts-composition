import { useEffect } from 'react'
import AdjustableColumnsBlock from './AdjustableColumnsBlock'
import withNavigationOpen from './hoc/withNavigationOpen'
import {
  AnotherVerySlowComponent,
  VerySlowComponent
} from './shared/very-slow-component'

export const MainPart = withNavigationOpen(
  ({ openNav }: { openNav: () => void }) => {
    useEffect(() => {
      // won't be triggered when context value changes
      // because toggleNav is coming from memoized HOC
      console.info('Main part re-render')
    })

    return (
      <>
        <div>
          <button onClick={openNav}>
            click to expand nav - inside heavy component
          </button>
        </div>
        <VerySlowComponent />
        <AnotherVerySlowComponent />
        <AdjustableColumnsBlock />
      </>
    )
  }
)
