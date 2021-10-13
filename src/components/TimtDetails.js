import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const TimtDetails = (props) => {
  const currentId = props.match.params.id
  const [timts, setTimts] = useState([])
  const [loading, setLoading] = useState(true)

  const getTimts = async (id) => {
    const foundTimt = await fetch(`http://localhost:9000/timt/${id}`)
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
          <h1>{timts.mood}</h1>
          {timts.comment}
          <Link to='/timt'>Back</Link>
          <Link to={`/timt/:id/edit`}>Edit</Link>
        </div>
    }
    </>
  )
}

export default TimtDetails