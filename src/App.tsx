import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import BookService from './pages/BookService';
import Technician from './pages/Technician';
import AcRepairs from './pages/Repairs/AcRepairs';
import Login from './pages/Login';
import TechnicianPage from './pages/TechnicianPage';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookService' element={<BookService />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/technician' element={<Technician />} />
        <Route path='/technicianPage' element={<TechnicianPage/>} />
        <Route path='/ac-repair' element={<AcRepairs />} />
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path='/refrigrator-repair' element={<RefrigratorRepairs />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
