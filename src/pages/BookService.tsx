import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

interface FormData {
  name: string;
  address: string;
  phone: string;
  email: string;
  applianceType: string;
  brandModel: string;
  issueDescription: string;
  preferredDate: string;
  preferredTime: string;
  serviceLocation: string;
  agreeTerms: boolean;
  additionalServices: string[];
  paymentMethod: string;
  billingInfo: string;
}

const initialFormData: FormData = {
  name: '',
  address: '',
  phone: '',
  email: '',
  applianceType: '',
  brandModel: '',
  issueDescription: '',
  preferredDate: '',
  preferredTime: '',
  serviceLocation: '',
  agreeTerms: false,
  additionalServices: [],
  paymentMethod: '',
  billingInfo: ''
};

const BookService: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleAdditionalServicesChange = (service: string) => {
    const currentIndex = formData.additionalServices.indexOf(service);
    const newCheckedServices = [...formData.additionalServices];

    if (currentIndex === -1) {
      newCheckedServices.push(service);
    } else {
      newCheckedServices.splice(currentIndex, 1);
    }

    setFormData({
      ...formData,
      additionalServices: newCheckedServices
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData(initialFormData);
  };
  return (
   <div className="bg-light py-5">
      <Container fluid style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="my-3">
            <div className="custom-form-container p-5" style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
              <h2 className="text-center mb-4 custom-header" style={{ color: '#333', fontWeight: 'bold' }}>Book Service</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Your Phone Number</Form.Label>
                  <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formAddress">
                  <Form.Label>Your Address</Form.Label>
                  <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formBrandModel">
                  <Form.Label>Brand and Model</Form.Label>
                  <Form.Control type="text" name="brandModel" value={formData.brandModel} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formIssueDescription">
                  <Form.Label>Description of the Issue or Service Required</Form.Label>
                  <Form.Control as="textarea" rows={4} name="issueDescription" value={formData.issueDescription} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formPreferredDate">
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formPreferredTime">
                  <Form.Label>Preferred Time</Form.Label>
                  <Form.Control type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formServiceLocation">
                  <Form.Label>Service Location</Form.Label>
                  <Form.Control type="text" name="serviceLocation" value={formData.serviceLocation} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formAgreeTerms">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleCheckboxChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAdditionalServices">
                  <Form.Label>Additional Services</Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="Regular Maintenance"
                    name="additionalServices"
                    value="Regular Maintenance"
                    checked={formData.additionalServices.includes('Regular Maintenance')}
                    onChange={() => handleAdditionalServicesChange('Regular Maintenance')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Warranty Services"
                    name="additionalServices"
                    value="Warranty Services"
                    checked={formData.additionalServices.includes('Warranty Services')}
                    onChange={() => handleAdditionalServicesChange('Warranty Services')}
                  />
                </Form.Group>

                <Form.Group controlId="formPaymentMethod">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formBillingInfo">
                  <Form.Label>Billing Information</Form.Label>
                  <Form.Control type="text" name="billingInfo" value={formData.billingInfo} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block mt-3" style={{ backgroundColor: '#007bff', border: 'none', borderRadius: '6px', boxShadow: 'none', fontWeight: 'bold', fontSize: '18px' }}>
                  Submit
                </Button>
                <Button variant="light" className="btn-block mt-3 mx-2" onClick={() => setFormData(initialFormData)} style={{ backgroundColor: '#e9ecef', border: 'none', borderRadius: '6px', boxShadow: 'none', fontWeight: 'bold', fontSize: '18px' }}>
                  Clear Form
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookService;
