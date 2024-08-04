import { useNavigation } from './context/NavigationController'

const AdjustableColumnsBlock = () => {
  const { isNavExpanded } = useNavigation()
  return isNavExpanded ? (
    <div>two block items here</div>
  ) : (
    <div>three block items here</div>
  )
}

export default AdjustableColumnsBlock
