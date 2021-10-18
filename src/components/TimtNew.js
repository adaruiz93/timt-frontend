import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      <p className='new'>How are you feeling today?</p>
      <Form onSubmit = {handleSubmit} className='form'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Name</Form.Label>
      <Form.Control id="name" name="name" value={input.name} onChange={handleChange} />
      </Form.Group>
	
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Mood</Form.Label>
        <Form.Control id="mood" name="mood" value={input.mood} onChange={handleChange} />
      </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label className='label'>Comment</Form.Label>
      <Form.Control as="textarea" rows={3} id="comment" name="comment" value={input.comment} onChange={handleChange} />
    </Form.Group>
      <Button className='label' variant="outline-secondary" as="input" type="submit" value="Create Post" />
      <Button className='label' variant="outline-secondary" href="/timt">Previous Entries</Button>
    </Form>
    </div>
  )
}

export default TimtNew