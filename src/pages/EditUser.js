import React, {useState, useEffect} from 'react'
import  {useNavigate,  useParams} from 'react-router-dom'
import axios from 'axios'
import '../styles/EditUser.css'

const EditUser = () => {
  let {id} = useParams()
  let navigate = useNavigate()
  const [user, setUser] =useState({
    firstName: "",
    lastName:  "",
    email: ""
  })

   const {firstName, lastName, email} =  user

   const handleInput =(e)=>{
     setUser({...user,  [e.target.name]: e.target.value})
   }

   useEffect(()=>{
      loadUser()
   }, [])

   const  loadUser=async()=>{
        const res = await axios.get(`http://localhost:3005/user/${id}`)
        setUser(res.data)
  
   }


   const handleSubmit=async(e)=>{
    e.preventDefault()
       await axios.put(`http://localhost:3005/user/${id}`, user)
       navigate("/")
   }
    
  return (
    <div className='edit-users'>
    <form className='form' onSubmit={handleSubmit}>
        <input type="text"  name="firstName" value={firstName} onChange={handleInput}/>
        <input type="text" name="lastName" value={lastName} onChange={handleInput}/>
        <input type="email"  name="email" value={email} onChange={handleInput}/>
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default EditUser