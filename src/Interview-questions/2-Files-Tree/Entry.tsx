import React from 'react'
import { TEntryProps } from './types'

const Entry = ({ entry, depth }: TEntryProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div>
      {entry.articles ? (
        <button className=' entry' onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '▼' : '▶'} {entry.name}
        </button>
      ) : (
        <span className='entry-container'>{entry.name}</span>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.articles?.map((entry) => (
            <Entry key={entry.name} {...{ entry }} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Entry
