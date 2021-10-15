import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const TimtNew = (props) => {
  const initialState = {
    name: '',
    mood: '',
    comment: ''
  }

  const [input, setInput] = useState(initialState)
  const handleChange = (e) => {
    setInput({...input, [e.target.id]: e.target.value })
  }

  const newTimt = async(data) => {
    try {
      const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const createdTimt = await fetch('https://timt.herokuapp.com/timt/', config)
      const parsed = await createdTimt.json()
      props.history.push('/timt')
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(initialState)
    newTimt(input)
  }

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" value={input.name} onChange={handleChange}/>

        <label htmlFor="mood">Mood:</label>
        <input id="mood" name="mood" value={input.mood} onChange={handleChange}/>
        
        <label htmlFor="comment">Comment:</label>
        <input id="comment" name="comment" value={input.comment} onChange={handleChange}/>

        <input type="submit" value="Create a Post"/>
      </form>
      <Link to='/timt'>Previous Entries</Link>
    </div>
  )
}

export default TimtNew