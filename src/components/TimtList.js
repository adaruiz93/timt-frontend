import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'

const TimtList = (props) => {
  const [timts, setTimts] = useState([])

  const getTimts = async () => {
    try {
      const allTimts = await fetch('http://localhost:9000/timt')
      const parsed = await allTimts.json()
      setTimts(parsed)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const config = {
        method: 'DELETE'
      }
      const deleteTimt = await fetch(`http://localhost:9000/timt/${id}`, config)
      const parsed = await deleteTimt.json()
      const updatedTimt = timts.filter(timts => timts._id !== parsed._id)
      setTimts(updatedTimt)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTimts()
  }, [])

  return (
    <div>
      <Table responsive className="list">
       <thead>
          <tr className="th">
            <th>Mood</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
        {timts && timts.map(timt => (
            <tr key={timts._id}>
             <td><Link to={`/timt/${timt._id}`} className="link">{timt.mood}</Link></td>
              <td>{timt.comment}</td>
              <FontAwesomeIcon icon="fa-regular fa-trash-can" />
              <td onClick={()=> handleDelete(timt._id)} className="delete">delete</td>
            </tr>
          ))}
        </tbody>
        </Table>
      <Link to='/timt/new' className="link">Log Current Mood</Link>
    </div>
  )
}

export default TimtList