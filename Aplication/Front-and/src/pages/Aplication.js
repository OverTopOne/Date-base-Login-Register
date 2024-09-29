import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import DebtChart from '../components/DebtChart';
import DebtForm from '../components/DebtForm';
import DebtList from '../components/DebtList';

function Application() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/debt" element={<DebtList />} />
                <Route path="/chart" element={<DebtChart />} />
                <Route path="/form" element={<DebtForm />} />
            </Routes>
        </Router>
    );
}

export default Application;
