import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"
import './App.css'
import {  } from "./"


export default function App() {
    const [quote, setQuote] = useState("Eighty percent of success is showing up.")
    const [author, setAuthor] = useState("Woody Allen")
    const [quotesArray, setQuotesArray] = useState([])
    const [color, setColor] = useState("") 


    async function getQuotesArray() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(data => setQuotesArray(data.quotes))
    }


    function getRandomQuote() {
        let randNum = Math.floor(quotesArray.length * Math.random())
        setQuote(quotesArray[randNum].quote)
        setAuthor(quotesArray[randNum].author)
    }


    useEffect(() => {
        getQuotesArray()
        setColor(randomcolor())
    }, [quote, author])

    
    return (
        <div className="App" style={{backgroundColor: color}}>
            <div id="quote-box">
                <p id="text" style={{color: color}}>
                    <i 
                        id="quote-icon" 
                        class="fas fa-quote-left" 
                        style={{color: color}}
                    >
                    </i> {quote}
                </p>
                <p id="author" style={{color: color}}>- {author}</p>
                <div id="footer">
                    <div>
                        <a 
                            id="tweet-quote" 
                            href="#"
                            style={{color: color}}
                        >
                            <i class="fab fa-twitter-square fa-2x"></i>
                        </a>
                        <a 
                            id="tumblr-quote" 
                            href="#"
                            style={{color: color}}
                        >
                            <i class="fab fa-tumblr-square fa-2x"></i>
                        </a>
                    </div>
                    <button 
                        id="new-quote" 
                        onClick={() => getRandomQuote()}
                        style={{backgroundColor: color}}
                    >
                        New quote
                    </button>
                </div>
            </div>
        </div>
    )
}