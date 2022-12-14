import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import  QuoteBoard  from '../Components/QuoteBoard'
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




 useEffect(() => {
  getRandomQuote()

 document.body.style.backgroundColor= color;
  document.getElementsByClassName("quoteCard")[0].style.color= color;
  document.getElementsByClassName("btn")[0].style.backgroundColor= color;
   

     
   }, [quote]);



  

  return (
    <div className="App">
      <QuoteBoard quote={quote} color= {color}  getRandomQuote={ getRandomQuote} />
      
      

      </div>
      
  
  )
}

export default App


/**animate__fadeOut */