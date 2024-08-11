/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react'

/*
 * Important note: When the React component's lifecycle is triggered.
 */

/* 
  Example 2

  1. We've the same component as above, but now we're storing the Child
    component in a variable and returning it later.
    The functionality is the same!

  Question: 
    Will the useEffect in Child be triggered this time?

  Answer:
    The answer is still the same. It won't.
  
  Why:
    - Because applies the same logic before.
    - The Child component is not rendered yet.
    - In this case, the Child component is stored in a variable and doesn't 
      returned yet.
*/

const Child = () => {
  useEffect(() => {
    // do something here, like fetching data for the Child
  }, [])
  return <div>Some child</div>
}

const ParentExampleTwo = () => {
  // set loading to true initially
  const [isLoading] = React.useState(true)
  // child is now here! before return
  const child = <Child />
  if (isLoading) return 'loading'
  return child
}

export default ParentExampleTwo
