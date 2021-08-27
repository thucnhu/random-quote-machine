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
        <div className="App">
            <div id="quote-box">
                <h1 id="text" style={{color: color}}>{quote}</h1>
                <p id="author" style={{color: color}}>- {author}</p>
                <div>
                    <div>
                        <a href="#">Twitter</a>
                        <a href="#">Tumblr</a>
                    </div>
                    <button onClick={() => getRandomQuote()}>New quote</button>
                </div>
            </div>
        </div>
    )
}