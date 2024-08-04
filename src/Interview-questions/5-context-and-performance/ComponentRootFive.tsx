import { ReactNode, useEffect, useState } from 'react'

import { NavigationController, useNavigation } from './NavigationController'
import './styles/styles.css'
import {
  AnotherVerySlowComponent,
  VerySlowComponent
} from './very-slow-component'

const AdjustableColumnsBlock = () => {
  const { isNavExpanded } = useNavigation()
  return isNavExpanded ? (
    <div>two block items here</div>
  ) : (
    <div>three block items here</div>
  )
}

const MainPart = () => {
  return (
    <>
      <VerySlowComponent />
      <AnotherVerySlowComponent />
      <AdjustableColumnsBlock />
    </>
  )
}

const ExpandButton = () => {
  const { isNavExpanded, toggle } = useNavigation()

  useEffect(() => {
    console.info('Button that uses Context re-renders')
  })

  return (
    <button onClick={toggle}>
      {isNavExpanded ? 'collapse <' : 'expand >'}
    </button>
  )
}

const SidebarLayout = ({ children }: { children: ReactNode }) => {
  const { isNavExpanded } = useNavigation()
  return (
    <div className='left' style={{ flexBasis: isNavExpanded ? '50%' : '20%' }}>
      {children}
    </div>
  )
}

const Sidebar = () => {
  return (
    <SidebarLayout>
      {/* this one will control the expand/collapse */}
      <ExpandButton />

      <ul>
        <li>
          <a href='#'>some links</a>
        </li>
      </ul>
    </SidebarLayout>
  )
}

const Layout = ({ children }: { children: ReactNode }) => {
  const [scroll, setScroll] = useState(0)
  console.log('🚀 ~ Layout ~ scroll:', scroll)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  }, [])

  return (
    <NavigationController>
      <div className='three-layout'>{children}</div>
    </NavigationController>
  )
}

const Page = () => {
  return (
    <Layout>
      <Sidebar />
      <MainPart />
    </Layout>
  )
}

export default function ComponentRootFive() {
  return (
    <>
      <h3>
        Very slow "Page" component - click on expand/collapse to toggle nav
      </h3>
      <p>
        Those components that use only API won't re-render on nav
        expand/collapse anymore
      </p>
      <Page />
    </>
  )
}
