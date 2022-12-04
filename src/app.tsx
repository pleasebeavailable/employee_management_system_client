import React from 'react';
import ListEmployeesComponent from './components/list_employees_component';
import HeaderComponent from './components/header_component';
import './app.css';
import FooterComponent from './components/footer_component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ListEmployeesComponent />} />
                    <Route path="/employees" element={<ListEmployeesComponent />} />
                </Routes>
            </div>
            <FooterComponent />
        </Router>
    );
}

export default App;
