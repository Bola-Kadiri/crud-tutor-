import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleUser = () => {
  const {id} = useParams()
  const [user, setUser] =useState({
    firstName: " ",
    lastName: " ",
    email:  " ",
    profile: " "

  })

  const {firstName, lastName, email, profile} = user

  useEffect(()=>{
     loadUser()
  }, [])
  const loadUser=async()=>{
    const res = await axios.get(`http://localhost:3005/user/${id}`)
    setUser(res.data)

  }
  return (
    <div>
         <h1>My name is {firstName} {lastName}</h1>
         
         <h2>I have a good profile: {profile}</h2>
         <h2>{email}</h2>
    </div>
  )
}

export default SingleUser