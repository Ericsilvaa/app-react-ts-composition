/* 
  Child to Parent:
  - Child to Parent data flow is done by passing a function as a prop to the child component.
  - The parent component passes a function to the child component through props.
  - The child component calls the function that was passed to it by the parent.
  - The parent component receives the data and uses it. 
*/

import React from 'react'

export default function ParentComponent() {
  const [some, setSome] = React.useState('SomeData')

  const handlerSome = (data: string) => {
    setSome(data)
  }

  return (
    <div>
      <ChildComponent handlerSome={handlerSome} />
      <h1>{some}</h1>
    </div>
  )
}

type ChildComponentProps = {
  handlerSome: (data: string) => void
}

const ChildComponent = ({ handlerSome }: ChildComponentProps) => {
  return (
    <div>
      <button onClick={() => handlerSome('NewData')}>Change</button>
      <h1>ChildComponent</h1>
    </div>
  )
}
