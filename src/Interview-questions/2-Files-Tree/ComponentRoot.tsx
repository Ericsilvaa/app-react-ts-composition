import Entry from './Entry'
import { files } from './files'

const ComponentRoot = () => {
  return (
    <div>
      {files.categories.map((entry) => (
        <Entry key={entry.name} {...{ entry }} depth={1} />
      ))}
    </div>
  )
}

export default ComponentRoot
