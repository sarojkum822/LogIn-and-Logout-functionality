import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name,email,password)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { name, email, password };

    const res = await axios.post("http://localhost:8080/registerUserDetails", formData);
   alert("ok you can login")
   console.log(res.data);
   console.log(res.status);
   if(res.status===201){
    navigate('/login');
   }

    } catch (error) {
        alert("data cannot be send from frontend side",error);
    }

  }
  return (
    <>
      <div className='register w-full h-screen items-center flex justify-center border-2'>
        <form onSubmit={handleSubmit} className='form w-[30rem] flex-col flex border-2 p-10 justify-center items-center'>
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Register</button>
        </form>

      </div>
    </>
  )
}

export default register