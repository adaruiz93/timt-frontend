import React, {useState, useEffect} from 'react'
 
const TimtEdit = (props) => {
 const initialState = {
   mood: '',
   comment: ''
 }
 
 const [input, setInput] = useState(initialState)
 const [loading, setLoading] = useState(true)
 
 const getTimts = async (id) => {
   try {
     const id = props.match.params.id
     const foundTimt = await fetch(`https://timt.herokuapp.com/timt/${id}`)
     const parsed = await foundTimt.json()
     setInput(parsed)
     setLoading(false)
   } catch (err) {
     console.log(err)
     props.history.push('/timt')
   }
 }
 
 const updateTimt = async (id, data) => {
   const config = {
     method: 'PUT',
     body: JSON.stringify(data),
     headers: {
       'Content-Type': 'application/json'
     }
   }
 
   const updateTimt = await fetch(`https://timt.herokuapp.com/timt/${id}`, config)
   const parsed = await updateTimt.json()
   props.history.push(`/timt/${id}`)
 }
 
 const handleSubmit = async (e) => {
   e.preventDefault()
   const {mood, comment} = input
   const timtData = {mood, comment}
   updateTimt(input._id, timtData)
 }
 
 const handleChange = (e) => {
   setInput ({...input, [e.target.mood]: e.target.value})
 }
 
 useEffect(() => {
   getTimts()
 }, [])
 
 return (
   <div>
     <h1>Edit Mood</h1>
     {
       loading ? <h3>Loading...</h3> :
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor='mood'>Mood</label>
           <input id='mood' name='mood' value={input.mood} onChange={handleChange} />
         </div>
         <div>
           <label htmlFor='comment'>Comment</label>
           <input id='comment' name='comment' value={input.comment} onChange={handleChange} />
         </div>
         <div>
           <button onClick={() => props.history.goBack()}>Go Back</button>
           <input type="submit" value="edit post"/>
         </div>
       </form>
     }
   </div>
 )
}
 
export default TimtEdit
