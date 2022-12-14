import React from 'react'
import "./Quote.scss"

export const QuoteBoard = ({quote, color,  getRandomQuote}) => {
  const {id, authur,content} = quote;
  return (
    <div className='Quote'>
        <div className="quoteCard">
            <p>{content}</p>
            <small>{authur}</small>
            <button onClick={getRandomQuote}>Click</button> 
          
        </div>
    </div>
  )
}


//animate__animated animate__fadeOut
