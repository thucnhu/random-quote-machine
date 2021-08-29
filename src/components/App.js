import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"
import './App.css'
import {  } from "./"


export default function App() {
    const [data, setData] = useState({
        quote: "Eighty percent of success is showing up.", 
        author: "Woody Allen"
    })
    const [quotesArray, setQuotesArray] = useState([])
    const [color, setColor] = useState("") 


    async function getQuotesArray() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(data => setQuotesArray(data.quotes))
    }


    function getRandomQuote() {
        let randNum = Math.floor(quotesArray.length * Math.random())
        setData({
            quote: quotesArray[randNum].quote, 
            author: quotesArray[randNum].author
        })
    }


    useEffect(() => {
        getQuotesArray()
        setColor(randomcolor())
    }, [data])

    
    return (
        <div className="App" style={{backgroundColor: color}}>
            <div id="quote-box">
                <p id="text" style={{color: color}}>
                    <i 
                        id="quote-icon" 
                        class="fas fa-quote-left" 
                        style={{color: color}}
                    >
                    </i> {data.quote}
                </p>
                <p id="author" style={{color: color}}>- {data.author}</p>
                <div id="footer">
                    <a 
                        id="tweet-quote" 
                        href={encodeURI(`http://www.twitter.com/intent/tweet?text=${data.quote} - ${data.author}`)}
                        style={{color: color}}
                    >
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <button 
                        id="new-quote" 
                        onClick={getRandomQuote}
                        style={{backgroundColor: color}}
                    >
                        New quote
                    </button>
                </div>
            </div>
        </div>
    )
}