import React from 'react'

/* 
  Context to Children:
  - Context to Children data flow is done by using React Context API.
  - The parent component wraps the child components with a Provider.
  - The parent component passes the data and functions to the Provider.
  - The child components use the useContext hook to get the data and functions.
*/

type DataContectType = {
  data: string
  handlerSome: (data: string) => void
}

const DataContext = React.createContext<DataContectType | null>(null)

const ParentProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState('SomeData')

  const handlerSome = React.useCallback((data: string) => {
    setData(data)
  }, [])

  const value = {
    data,
    handlerSome
  }

  return <DataContext.Provider {...{ value }}>{children}</DataContext.Provider>
}

// Custom hook to use the DataContext
const useDataContext = () => {
  const context = React.useContext(DataContext)

  if (!context) {
    throw new Error('useDataContext must be used within a DataContext')
  }

  return context
}

export default function ParentComponent() {
  return (
    <ParentProvider>
      <ChildComponent />
      <AnotherChildComponent />
    </ParentProvider>
  )
}

const AnotherChildComponent = () => {
  const { data, handlerSome } = useDataContext()

  return (
    <div>
      <button onClick={() => handlerSome('NewData')}>Change</button>
      <h1>{data}</h1>
    </div>
  )
}

const ChildComponent = () => {
  const { data, handlerSome } = useDataContext()

  return (
    <div>
      <button onClick={() => handlerSome('NewData')}>Change</button>
      <h1>{data}</h1>
    </div>
  )
}
