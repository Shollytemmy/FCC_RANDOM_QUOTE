import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { QuoteBoard } from '../Components/QuoteBoard'
import {Quotes} from "./Quote"

function App() {
  const [quote, setQuote] = useState([])
  const [color, setColor] = useState('')
  


  const getRandomQuote = () =>{
    let randomQuote = Math.floor(Math.random() * Quotes.length)
    setQuote(Quotes[randomQuote]);

    let str ="0123456789abcdef";
    let hexCode = ""

    for(let i = 0; i < 6; i++){
      const colorIdx = Math.floor(Math.random() * str.length)
      hexCode += str[colorIdx]
      setColor(`#${hexCode}`)



    }
    
  }

  console.log(quote);
  console.log(color)

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
