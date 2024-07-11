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

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}

export default App
