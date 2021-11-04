import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'


const Reminder = ({ name, ...props }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="light" size="sm" onClick={handleShow} className="help">
        Help
      </Button>
      <Offcanvas className='off' show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Need Help?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <p>National Suicide Prevention Lifeline</p> 
          <div>
          <p>To speak to a counselor now, please call the Lifeline at 1-800-273-TALK (8255)</p>
          <p>National Suicide Prevention Lifeline en español: 1-888-628-9454</p>
          <p>National Suicide Prevention Lifeline for LGBTQ+: 1-800-273-8255</p>
          <p>Crisis Text Line: Text HOME to 741741</p>
          <p>Black Emotional and Mental Health Collective: www.beam.community</p>
          <p>Asian Mental Health Collective: asianmhc.org</p>
          <Button className='chat' variant="outline-info" size="sm" href='https://suicidepreventionlifeline.org/chat/' target="_blank">Chat</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}


export default Reminder