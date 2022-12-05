import React from 'react';
import ListEmployeesComponent from './components/list_employees_component';
import HeaderComponent from './components/header_component';
import './app.css';
import FooterComponent from './components/footer_component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployeeComponent from './components/create_employee_component';

function App() {
    return (
        <Router>
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ListEmployeesComponent />} />
                    <Route path="/employees" element={<ListEmployeesComponent />} />
                    <Route path="/add-employee" element={<CreateEmployeeComponent />} />
                    <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
                </Routes>
            </div>
            <FooterComponent />
        </Router>
    );
}

export default App;
