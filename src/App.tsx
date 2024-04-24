import React, { useState } from 'react';
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
import RefrigratorRepairs from './pages/Repairs/RefrigratorRepairs'
import Footer from './components/Footer'
import TechnicianPage from './pages/TechnicianPage';
import Admin from './pages/Admin';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import i18n configuration

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };

  return (
    <I18nextProvider i18n={i18n}>
    <Router>
      <NavBar  isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookService' element={<BookService />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/technician' element={<Technician />} />
        <Route path='/technicianPage' element={<TechnicianPage/>} />
        <Route path='/ac-repair' element={<AcRepairs />} />
        <Route path='/Login' element={<Login handleLogin={handleLogin} />}/>
        <Route path='/refrigrator-repair' element={<RefrigratorRepairs />} />
        <Route path='/TechPage' element={<TechnicianPage />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
    </I18nextProvider>
  );
}

export default App;
