import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const TimtHome = (props) => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const quoteAPI =  async () => {
    let arrayOfQuotes = []
    try {
      const data = await axios.get('https://api.quotable.io/random')
      arrayOfQuotes = data.data
    } catch (err) {
      console.log(err)
    }

  try {
    setQuote(arrayOfQuotes.content)
    setAuthor(arrayOfQuotes.author)
  } catch (err) {
    console.log(err)
  }
}

  useEffect(() => {
    quoteAPI()
  }, [])

  return (
  <div> 
    <p>Welcome to This Is Me Trying, a place where you can keep track of your mental state</p>
    <Card className='text-center'>
      <Card.Header className="cardHeader">Your Quote of the Day</Card.Header>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p className="quote">{quote}</p>
        <footer className='blockquote-footer'>
          {author}
          </footer>  
           <Button size='sm' variant="outline-secondary" onClick={quoteAPI}>Inspire Me</Button>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TimtHome