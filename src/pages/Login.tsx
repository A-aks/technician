import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import '../App.css'; 

const Login: React.FC<{ handleLogin: any }> = ({ handleLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (phoneNumber === '123' && password === '123') {
        handleLogin(); 
        navigate('/TechPage');
      } else if (phoneNumber === '1234' && password === '1234') {
        handleLogin();
        navigate('/admin');
      } else {
        setError('Invalid phone number or password');
        setTimeout(() => {
          setError(''); 
        }, 3000);
      }
      setLoading(false);
    }, 3000);
  };
  
  return (
    <Container className='card-3d mt-3 mb-3 w-75' >
      <Row className="justify-content-center mb-4">
        <Col xs={6} md={3} className="text-center">
          <Image src="https://transcendglobalservices.com/wp-content/uploads/2021/04/WhatsApp-Image-2022-07-18-at-4.19.28-PM-copy.png" alt="User Logo" fluid style={{ maxWidth: '100px' }} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">Login </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicPhoneNumber">
              <Form.Label  className="custom-label" style={{ color: '#333', fontWeight: 'bold' }}>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  className="custom-input" style={{ border: '2px solid #ccc', borderRadius: '4px', boxShadow: 'none' }} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label  className="custom-label" style={{ color: '#333', fontWeight: 'bold' }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}  className="custom-input" style={{ border: '2px solid #ccc', borderRadius: '4px', boxShadow: 'none' }} />
            </Form.Group>

            <Button  type="submit" className='complain-button heading-weight mb-3 mt-3' disabled={loading} style={{ backgroundColor: "orange", border: "none", color: "white" }}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            {error && <p className="text-danger">{error}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;