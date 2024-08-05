import { ReactNode, useEffect, useState } from 'react'
import { NavigationController } from '../context/NavigationController'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
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

export default Layout
