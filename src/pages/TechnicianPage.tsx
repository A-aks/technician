import React, { useState, ChangeEvent } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import CustomerForm from './CustomerForm';

const TechnicianPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    serviceRequired: "",
    issueDescription: ""
  });

  const navigate = useNavigate();

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

  navigate("/customer-form");
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
                <Link to="/customer-form">
                  <button className="btn btn-primary" >Contact Customer</button>
                </Link>
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
      <Routes>
      <Route path="/customer-form" element={<CustomerForm />}/>
      </Routes>
    </div>
  );
};
export default TechnicianPage;
