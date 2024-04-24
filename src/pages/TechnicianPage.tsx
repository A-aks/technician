import React, { useState, ChangeEvent } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TechnicianPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    serviceRequired: "",
    issueDescription: ""
  });

  const handleContactCustomer = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    console.log(formData);
    // Clear form data after submission
    setFormData({
      fullName: "",
      phoneNumber: "",
      address: "",
      serviceRequired: "",
      issueDescription: ""
    });
    setShowModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };                                   

  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Complaints
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Received
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Resolve
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h4>Complaints</h4>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024-04-16</td>
                <td>John Doe</td>
                <td>Pending</td>
                <td>
                  <button className="btn btn-primary">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <h4>Received Items</h4>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date Received</th>
                <th>Item Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024-04-16</td>
                <td>Laptop</td>
                <td>Assigned</td>
                <td>
                  <button className="btn btn-primary" onClick={handleContactCustomer}>Contact Customer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <h4>Resolved Items</h4>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date Resolved</th>
                <th>Item Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024-04-16</td>
                <td>Laptop</td>
                <td>Resolved</td>
                <td>
                  <button className="btn btn-primary">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name:</label>
            <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="serviceRequired" className="form-label">Service Required:</label>
            <input type="text" className="form-control" id="serviceRequired" name="serviceRequired" value={formData.serviceRequired} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="issueDescription" className="form-label">Describe Your Issue:</label>
            <textarea className="form-control" id="issueDescription" name="issueDescription" value={formData.issueDescription} onChange={handleChange}></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TechnicianPage;
