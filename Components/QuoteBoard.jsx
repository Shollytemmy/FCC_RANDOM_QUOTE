import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
import {CiTwitter} from 'react-icons/ci'
import "./Quote.scss"

 const QuoteBoard = ({quote, color,  getRandomQuote}) => {
  const {id, authur,content} = quote;
  return (
    <div className='Quote'>
        <div className="quoteCard">
            <p className='content'><FaQuoteLeft /> {content}</p>
            <div className='authur'>
            <small>{authur}</small>

            </div>
            <div className="btn-div">
              <div className="social-btn">
                <CiTwitter />
                <CiTwitter />

              </div>
              <button onClick={getRandomQuote} className="btn">New Quote</button>
            </div>
 
          
        </div>
    </div>
  )
}

export default QuoteBoard


//animate__animated animate__fadeOut
