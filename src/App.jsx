import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { QuoteBoard } from '../Components/QuoteBoard'

function App() {
  const [count, setCount] = useState(0)

  // $(document).ready(function(){
  //   console.log("Document Document");
  // })

  return (
    <div className="App">
      <QuoteBoard />
      
      

      </div>
      
  
  )
}

export default App
