import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import the CSS file for styling

const CustomerForm = () => {
  const initialCustomerData = [
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "1234567890",
      serviceProvided: "AC repair"
    },
    
  ];

  const [customerData, setCustomerData] = useState(initialCustomerData);
  const [additionalService, setAdditionalService] = useState({
    serviceName: "",
    charges: ""
  });
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalService({
      ...additionalService,
      [name]: value
    });
  };

  const handleAddService = () => {
    setServices([...services, { ...additionalService }]);
    setAdditionalService({
      serviceName: "",
      charges: ""
    });
  };

  const getTotalPayment = () => {
    let total = 0;
    services.forEach((service) => {
      total += parseFloat(service.charges);
    });
    return total.toFixed(2);
  };

  const handleClearForm = () => {
    setAdditionalService({
      serviceName: "",
      charges: ""
    });
    setServices([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    handleClearForm();
  };

  return (
    <div className="centered-container">
      <div className="form-box">
        <h1>Customer Details</h1>
        {customerData.map((customer) => (
          <div className="customer-details-box" key={customer.id}>
            <div>
              <strong>Name:</strong> {customer.name}
            </div>
            <div>
              <strong>Service:</strong> {customer.serviceProvided}
            </div>
            <div>
              <strong>Phone number:</strong> {customer.phoneNumber}
            </div>
          </div>
        ))}
  
        <div className="add-service-row">
          <div className="service-input">
            <label>Service Name:</label>
            <input
              type="text"
              name="serviceName"
              value={additionalService.serviceName}
              onChange={handleChange}
            />
          </div>
          <div className="service-input">
            <label>Charges:</label>
            <input
              type="text"
              name="charges"
              value={additionalService.charges}
              onChange={handleChange}
            />
          </div>
          <button type="button" className="add-service-button" onClick={handleAddService}>
            Add
          </button>
        </div>
  
        <div>
          <h3>Added Services</h3>
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.serviceName}</td>
                  <td>{service.charges}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p><strong>Total Payment:</strong> {getTotalPayment()}</p>
        </div>
  
        <div className="button-group">
          <button type="button" className="clear-button" onClick={handleClearForm}>Clear Form</button>
          <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
  
      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you, Your form has been successfully submitted.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
  
};

export default CustomerForm;
