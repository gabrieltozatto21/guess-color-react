import { useState } from 'react'
import { Inicio } from './paginas/inicio/Inicio'
import './paginas/inicio/inicio.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Inicio />
    </div>
  )
}

export default App
