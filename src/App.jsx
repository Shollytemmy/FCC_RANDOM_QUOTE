import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { QuoteBoard } from '../Components/QuoteBoard'
import {Quotes} from "./Quote"

function App() {
  const [quote, setQuote] = useState([])
  // 


  const getRandomQuote = () =>{
    let randomQuote = Math.floor(Math.random() * Quotes.length)
    setQuote(Quotes[randomQuote])
    
  }

  console.log(quote);

 useEffect(() => {

   getRandomQuote();
  
 },[]);


  

  return (
    <div className="App">
      <QuoteBoard />
      
      

      </div>
      
  
  )
}

export default App
