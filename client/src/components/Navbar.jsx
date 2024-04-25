import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({onLogin}) => {


  // const userItems = localStorage.getItem("logged_in_user");

  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("logged_in_user");

  }


  return (
    <>
      <div className='w-full h-[70px] bg-zinc-300 text-zinc-900 flex justify-between items-center text-2xl font-light'>
        <div className='logo'>
          <h1>logo</h1>
        </div>
        <div className='nav-items'>
          <ul className='flex'>
            <Link to="/home"><li className='mr-4'>Home</li></Link>

            {!onLogin ? <Link to='/login' onClick={handleLogout}><li className='mr-4'>Logout</li></Link> : <Link to="/login"><li className='mr-4'>Login</li></Link>}
            
            <Link to="/register"><li className='mr-4'>Register</li></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar