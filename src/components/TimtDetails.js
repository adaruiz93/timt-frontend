import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const TimtDetails = (props) => {
  const currentId = props.match.params.id
  const [timts, setTimts] = useState([])
  const [loading, setLoading] = useState(true)

  const getTimts = async (id) => {
    const foundTimt = await fetch(`https://timt.herokuapp.com/timt/${id}`)
    const parsed = await foundTimt.json()
    setTimts(parsed)
    setLoading(false)
  }
  useEffect(() => {
    getTimts(currentId)
  }, [])

  return (
    <>
    {
      loading ? <h3>Loading...</h3> :
      <div>
      <Card className="text-center">
        <Card.Header className='details'>{timts.name}</Card.Header>
        <Card.Body>
          <Card.Title className='details'>{timts.mood}</Card.Title>
          <Card.Text className='details'>
            {timts.comment}
          </Card.Text>
          </Card.Body>
          <Card.Footer className='details' className="text-muted">
            <Button className='details' variant="light" href="/timt">Back</Button>
          </Card.Footer>
        </Card>
      </div>
    }
    </>
  )
}

export default TimtDetails