import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaUser, FaLaptop, FaPencilAlt, FaEnvelopeOpenText, FaTrash } from 'react-icons/fa';
import '../App.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const TechnicianContactUs: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.name && formData.email && formData.phone && formData.service && formData.message) {
        const response = await fetch('Your Api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          console.log('Form submitted successfully!');
          alert('Form submitted successfully!');
          setFormData(initialFormData); 
        } else {
          console.error('Failed to submit form:', response.statusText);
          alert('Failed to submit form. Please try again later.');
        }
      } else {
        alert('Please fill out all fields');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };
  

  const handleClearForm = () => {
    setFormData(initialFormData); 
  };

  return (
    <div className="complain-bg  my-4 ">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={12} className="my-3">
            <div className=" custom-form-container p-3" style={{ boxShadow: "0px 8px 16px rgba(255, 165, 0, 0.5)", borderRadius: "20px" }}>
              <h2 className="text-center mb-4 custom-header" style={{ color: '#333', fontWeight: 'bold' }}>
              &#x1F4DE; {/* Phone Icon */}
                Contact Us
              </h2>
              <Form onSubmit={handleSubmit}>
              <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="formBasicName">
                  <Form.Label className="custom-label" style={{ color: '#333', fontWeight: 'bold' }}>
                    <FaUser  /> {/* User Icon */}
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="custom-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ border: '2px solid #ccc', borderRadius: '4px', boxShadow: 'none' }}
                    required
                  />
                </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="custom-label" style={{ color: '#333', fontWeight: 'bold' }}>
                    <FaEnvelope /> {/* Envelope Icon */}
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="custom-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ border: '2px solid #ccc', borderRadius: '4px', boxShadow: 'none' }}
                    required
                  />
                </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label className="custom-label" style={{ color: '#333', fontWeight: 'bold' }}>
                    <FaPhone />
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    className="custom-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ border: '2px solid #ccc', borderRadius: '4px', boxShadow: 'none' }}
                    required
                  />
                </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                <Form.Group controlId="formBasicService">
                  <Form.Label className="custom-label" style={{ color: '#333', fontWeight: 'bold' }}>
                    <FaLaptop  /> 
                    Service Required
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="custom-input"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ border: '2px solid #ccc', borderRadius: '4px', boxShadow: 'none' }}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="Refrigerator Repair">Refrigerator Repair</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
                </Col>


                <Col xs={12} md={6}>
                <Form.Group controlId="formBasicMessage">
                  <Form.Label className="custom-label" style={{ color: '#333', fontWeight: 'bold' }}>
                    <FaPencilAlt  /> {/* Pen Icon */}
                    Additional Details
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter additional details or questions"
                    className="custom-textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ border: '2px solid #ccc', borderRadius: '4px', boxShadow: 'none' }}
                    required
                  />
                </Form.Group>
                </Col>
                </Row>

                <Button variant="primary" type="submit" className='mt-3 mx-2' style={{ backgroundColor: "#ffc107", border: "none", color: "black", fontWeight:"700" }}> <FaEnvelopeOpenText  className='mx-1'  />Send</Button>
                <Button variant="primary"className='mt-3' style={{ backgroundColor: "#ffc107", border: "none", color: "black", fontWeight:"700" }} onClick={handleClearForm}> <FaTrash  /> Clear Form</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechnicianContactUs;
