import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Home from './components/home.jsx';
import Navbar from './components/Navbar.jsx';
import FirstPage from './components/FirstPage.jsx';
import { useState } from 'react';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogIn = () => {
        setLoggedIn(true);
    };

    
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/login" element={<Login onLogin={handleLogIn} />} />
                
                    <Route path="/home" element={loggedIn ? <Home />:<FirstPage/>} />
                
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
