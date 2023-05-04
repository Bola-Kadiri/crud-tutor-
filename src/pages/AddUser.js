import React, {useState} from 'react'
import '../styles/AddUser.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddUser = () => {
  let naviagte = useNavigate()
  const [user, setUser] =useState({
    firstName: " ",
    lastName:  " ",
    email: " "
  })

  const [error, setError] = useState(false)

  const {firstName, lastName, email} = user
  const handleInput=(e)=>{
       setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
     if(firstName.trim().length===0 || lastName.trim().length===0 || email.trim().length==0){
      setError(true)
     }else{
      setError(false)
      await axios.post("http://localhost:3005/user", user)
      naviagte("/")
     }
     
  }

  return (
    <div className='add-users'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={firstName} onChange={handleInput}/>
            {error && firstName.trim().length===0 ? 
              <label>First name can not be empty</label>
              :
              " "
            }
           
            <input type="text" name="lastName" value={lastName} onChange={handleInput}/>
               {error && lastName.trim().length===0 ?
                <label>Last name can  not be empty</label>
                :
                " "
              }
           
            <input type="email" name="email" value={email} onChange={handleInput}/>
               {error && email.trim().length===0 ? 
                <label>Email can not be empty</label>
                :
                " "
              }
           
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUser