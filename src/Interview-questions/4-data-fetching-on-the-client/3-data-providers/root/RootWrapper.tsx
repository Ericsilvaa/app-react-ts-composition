import Providers from '../providers/Providers'
import ComponentRoot from './ComponentRoot'

const RootWrapper = () => {
  return (
    <Providers>
      <ComponentRoot />
    </Providers>
  )
}

export default RootWrapper
