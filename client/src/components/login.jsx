import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home from "./home";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loggedIn, setLoggedIn] = useState(false); // Set initial state to false

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = { email, password };
            const res = await axios.post("http://localhost:8080/loginUser", formData);
            alert("Welcome to Home Page")
            console.log(res.data);
            console.log(res.status);
            localStorage.setItem("logged_in_user", JSON.stringify(res.data));
            setLoggedIn(true); // Set loggedIn to true after successful login
            onLogin();
            navigate('/home');
        } catch (error) {
            console.error("Error sending data:", error);
            alert("Error sending data: " + error.message);
        }
    }

    let userItems = localStorage.getItem("logged_in_user");

    return (
        <>


            <div className='flex justify-center h-screen items-center'>
                {userItems ? <Home /> :
                    <form onSubmit={handleSubmit} className='flex flex-col items-center border-2 p-10'>
                        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Change input type to password */}
                        <button type='submit'>LogIn</button> {/* Change button text based on loggedIn state */}
                    </form>}
            </div>

        </>
    );
}

export default Login;
