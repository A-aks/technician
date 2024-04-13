import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const BookService: React.FC = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData(initialFormData);
  };

  const handleClearForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="bg-light py-5">
      <Container fluid style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="my-3">
            <div className="custom-form-container p-5" style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
              <h2 className="text-center mb-4 custom-header" style={{ color: '#333', fontWeight: 'bold' }}>Book a New Service</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text"  name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email"  name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Your Phone Number</Form.Label>
                  <Form.Control type="tel"  name="phone" value={formData.phone} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formServiceType">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Control as="select" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option value="AC">AC</option>
                    <option value="Refrigerator">Refrigerator</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label> Summary Details </Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-block mt-3">Submit</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookService;
