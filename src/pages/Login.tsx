import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

const LoginForm: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            if (phoneNumber === 'technician') {
                navigate('/TechnicianPage');
            } else if (phoneNumber === 'admin') {
                navigate('/Admin');
            } else {
                throw new Error('Invalid user role');
            }
        } catch (error) {
            setError('Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className=' card-3d mt-3 mb-3 ' style={{ width: '100%', maxWidth: '60%', backgroundColor: 'orange' }}>
            <Row className="justify-content-center mb-4">
                <Col xs={6} md={3} className="text-center">
                    <Image src="https://transcendglobalservices.com/wp-content/uploads/2021/04/WhatsApp-Image-2022-07-18-at-4.19.28-PM-copy.png" alt="User Logo" fluid />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h2 className="text-center">Login Account</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter phone number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="light-orange" type="submit" className='mb-3 mt-3' disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>

                        {error && <p className="text-danger">{error}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
