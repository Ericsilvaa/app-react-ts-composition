import { useEffect } from 'react'
import { useNavigation } from '../../context/NavigationController'

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

export default ExpandButton
