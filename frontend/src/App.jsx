import { useState } from 'react'

import Logic from './logic'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logic />
    </>
  )
}

export default App
