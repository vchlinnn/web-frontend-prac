import { useState } from 'react'

// Define a React component with the name App
/*
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
 */

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App
