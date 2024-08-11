/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react'

/*
 * Important note: When the React component's lifecycle is triggered.
 */

/* 
  Example 1

  1. We've Parent component which conditionally renders Child component 
    based on state. => isLoading

  Question: 
    - Will the Child's useEffect , and therefore the fetch request there, be triggered? 

  Answer: it won't.
  
  Why?
    - Because the Child component is not rendered yet.
*/

// eslint-disable-next-line react-refresh/only-export-components
const Child = () => {
  useEffect(() => {
    // do something here, like fetching data for the Child
  }, [])
  return <div>Some child</div>
}

const ParentExampleOne = () => {
  // set loading to true initially
  const [isLoading] = React.useState(true)

  if (isLoading) return 'loading'

  return <Child />
}

export default ParentExampleOne
