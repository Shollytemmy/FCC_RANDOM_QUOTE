import React from 'react'
import "./Quote.scss"

 const QuoteBoard = ({quote, color,  getRandomQuote}) => {
  const {id, authur,content} = quote;
  return (
    <div className='Quote'>
        <div className="quoteCard">
            <p className='content'>{content}</p>
            <div className='authur'>
            <small>{authur}</small>

            </div>
            <div className="btn-div">
              <button onClick={getRandomQuote} className="btn">Click</button>
            </div>
 
          
        </div>
    </div>
  )
}

export default QuoteBoard


//animate__animated animate__fadeOut
