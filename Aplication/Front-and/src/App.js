import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'; 
import Application from './pages/Aplication';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/register" element={<Register />} /> {}
                <Route path="/application" element={<Application />} />
            </Routes>
        </Router>
    );
}

export default App;
