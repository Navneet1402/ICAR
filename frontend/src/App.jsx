import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Comp4 from './Comp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp1/>
      <Comp2/>
      <Comp3/>
      <Comp4/>

    </>
  )
}

export default App
