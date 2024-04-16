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
import RefrigratorRepairs from './pages/Repairs/RefrigratorRepairs';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookService' element={<BookService />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/technician' element={<Technician />} />
        <Route path='/ac-repair' element={<AcRepairs />} />
        <Route path='/refrigrator-repair' element={<RefrigratorRepairs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
