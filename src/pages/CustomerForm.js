// CustomerForm.js

import React, { useState } from "react";
import "./CustomerForm.css"; // Import the CSS file for styling
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const CustomerForm = () => {
  const initialCustomerData = [
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "1234567890",
      serviceProvided: ""
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNumber: "9876543210",
      serviceProvided: ""
    },
    {
      id: 3,
      name: "Alice Johnson",
      phoneNumber: "5555555555",
      serviceProvided: ""
    }
  ];

  const [customerData, setCustomerData] = useState(initialCustomerData);
  const [additionalService, setAdditionalService] = useState({
    serviceName: "",
    charges: ""
  });
  const [services, setServices] = useState([]);
  const [showAllCustomers, setShowAllCustomers] = useState(false);

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
    console.log("Services:", services);
    console.log("Total Payment:", getTotalPayment());
    // Perform submit action here
  };

  const handleShowAllCustomers = () => {
    setShowAllCustomers(!showAllCustomers);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>{showAllCustomers ? "All Customers" : "Customer Details"}</h2>
        <Carousel nextIcon={<BsChevronRight />} prevIcon={<BsChevronLeft />}>
          {customerData.map((customer) => (
            <Carousel.Item key={customer.id}>
              <div className="customer-details-box">
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
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="add-service-row">
          <div className="service-input">
            <label>Service Name:</label>
            <select
              name="serviceName"
              value={additionalService.serviceName}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="AC Repair">AC Repair</option>
              <option value="Refrigerator Repair">Refrigerator Repair</option>
            </select>
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
          <h2>Added Services</h2>
          {services.map((service, index) => (
            <div key={index}>
              <p><strong>Service Name:</strong> {service.serviceName}</p>
              <p><strong>Charges:</strong> {service.charges}</p>
            </div>
          ))}
          <p><strong>Total Payment:</strong> {getTotalPayment()}</p>
        </div>

        <div className="button-group">
          <button type="button" className="clear-button" onClick={handleClearForm}>Clear Form</button>
          <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>

        
      </div>
    </div>
  );
};

export default CustomerForm;
