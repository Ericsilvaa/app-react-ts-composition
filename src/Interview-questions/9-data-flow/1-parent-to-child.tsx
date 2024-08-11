/* 
  Parent to Child: 
  - Parent to Child data flow is done by passing data as props to the child component.
  - The parent component passes data to the child component through props.
  - The child component receives the data and uses it.
*/

export default function ParentComponent() {
  const SomeData = 'SomeData'

  return <ChildComponent data={SomeData} />
}

type ChildComponentProps = {
  data: string
}

const ChildComponent = (props: ChildComponentProps) => {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}
