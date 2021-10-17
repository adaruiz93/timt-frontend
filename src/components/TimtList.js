import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

const TimtList = (props) => {
  const [timts, setTimts] = useState([])

  const getTimts = async () => {
    try {
      const allTimts = await fetch('https://timt.herokuapp.com/timt')
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
      const deleteTimt = await fetch(`https://timt.herokuapp.com/timt/${id}`, config)
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
      <Table responsive striped bordered hover responsive="sm">
       <thead className="tablehead">
          <tr className="th">
            <th>Name</th>
            <th>Mood</th>
            <th>Comment</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
        {timts && timts.map(timt => (
            <tr key={timts._id}>
              <td>{timt.name}</td>
             <td><Link to={`/timt/${timt._id}`} className="link">{timt.mood}</Link></td>
              <td>{timt.comment}</td>
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