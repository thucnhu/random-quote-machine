import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"
import './App.css'

export default function App() {
   const [quote, setQuote] = useState("")
   const [author, setAuthor] = useState("")
   const [color, setColor] = useState("")

   function getRandomQuote() {
      fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
         .then(response => response.json())
         .then(data => {
            setQuote(data.data[0].quoteText)
            setAuthor(data.data[0].quoteAuthor)
         })
   }

   useEffect(getRandomQuote, [])

   useEffect(() => {
      setColor(randomcolor())
   }, [quote, author])

   return (
      <div className="App" style={{ backgroundColor: color }}>
         <div id="quote-box">
            <p id="text" style={{ color: color }}>
               <i
                  id="quote-icon"
                  class="fas fa-quote-left"
                  style={{ color: color }}
               >
               </i> {quote}
            </p>
            <p id="author" style={{ color: color }}>- {author}</p>
            <div id="footer">
               <a
                  id="tweet-quote"
                  href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} - ${author}`)}
                  style={{ color: color }}
               >
                  <i class="fab fa-twitter-square fa-2x"></i>
               </a>
               <button
                  id="new-quote"
                  onClick={getRandomQuote}
                  style={{ backgroundColor: color }}
               >
                  New quote
               </button>
            </div>
         </div>
      </div>
   )
}