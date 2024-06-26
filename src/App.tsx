import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import Complain from './pages/Complain';
import Technician from './pages/Technician';
import AcRepairs from './pages/Repairs/AcRepairs';
import Login from './pages/Login';
import RefrigratorRepairs from './pages/Repairs/RefrigratorRepairs'
import Footer from './components/Footer'
import TechnicianPage from './pages/TechnicianPage';
import Admin from './pages/Admin';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import i18n configuration
import CustomerForm from './pages/CustomerForm.js';
import UserProfilePage from "./pages/UserProfilePage";
import ViewComplain from './pages/ViewComplain';
import AddTechnician from './pages/AddTechnician';
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
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/complain' element={<Complain />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/technician' element={<Technician />} />
          <Route path='/technicianPage' element={<TechnicianPage />} />
          <Route path='/ac-repair' element={<AcRepairs />} />
          <Route path='/Login' element={<Login handleLogin={handleLogin} />} />
          <Route path='/refrigrator-repair' element={<RefrigratorRepairs />} />
          <Route path='/TechPage' element={<TechnicianPage />} />
          <Route path="/customer-form" element={<CustomerForm />} />
          <Route path='/admin' element={<Admin />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/complain/:id" element={<ViewComplain />} />
          <Route path="add_technician" element={<AddTechnician />} />
          <Route path="add_technician/:id" element={<AddTechnician />} />
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;
