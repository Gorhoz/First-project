import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './components/Books'
import Exercise2 from './components/Exercise2'
import Exercise3 from './components/Exercise3'
import ProductsList from './components/Exercise4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        {/* <Books /> */}
        {/* <Exercise2 /> */}
        {/* <Exercise3 /> */}
        <ProductsList />
      
    </div>
  )
}

export default App
