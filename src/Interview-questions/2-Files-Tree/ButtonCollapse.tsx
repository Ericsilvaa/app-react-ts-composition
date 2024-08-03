import React from 'react'
import { TEntry } from './types'

type Props = {
  entry: TEntry
  children: React.ReactNode
}

const ButtonCollapse = ({ entry, children }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <>
      <button className='entry' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '▼' : '▶'} {entry.name}
      </button>
      {isExpanded && { children }}
    </>
  )
}

export default ButtonCollapse
