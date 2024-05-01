import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const initialUserProfile = {
    username: "John Doe",
    phoneNumber: "123-456-7890",
    email: "johndoe@gmail.com"
  };

  // State to track whether the form is in edit mode
  const [editMode, setEditMode] = useState(false);

  // State to store user profile data
  const [userProfile, setUserProfile] = useState(initialUserProfile);

  // State to track the active input field
  const [activeInput, setActiveInput] = useState(null);

  // Hook to navigate to the previous page
  const navigate = useNavigate();

  // Function to handle edit button click
  const handleEditClick = () => {
    // Set edit mode to true
    setEditMode(true);
  };

  // Function to handle save button click
  const handleSaveClick = () => {
    // Save the updated user profile
    console.log("Profile saved:", userProfile);
    // Set edit mode to false after saving
    setEditMode(false);
  };

  // Function to handle cancel button click
  const handleCancelClick = () => {
    // Reset user profile to initial values
    setUserProfile(initialUserProfile);
    // Set edit mode to false
    setEditMode(false);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in user profile
    setUserProfile({ ...userProfile, [name]: value });
  };

  // Function to handle close button click
  const handleCloseClick = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  // Function to handle input focus
  const handleInputFocus = (name) => {
    // Set the active input field
    setActiveInput(name);
  };

  // Function to handle input blur
  const handleInputBlur = () => {
    // Reset the active input field
    setActiveInput(null);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="user-profile-container" style={{ boxShadow: "0 0 10px orange", padding: "20px", borderRadius: "10px", border: "1px solid orange", width: "500px" }}>
        <h2>User Profile</h2>
        {editMode ? (
          // Render textboxes in edit mode
          <>
            <div style={{ marginBottom: "15px" }}>
              <label>Name:</label>
              <input 
                type="text" 
                name="username" 
                value={userProfile.username} 
                onChange={handleInputChange} 
                onFocus={() => handleInputFocus("username")} 
                onBlur={handleInputBlur} 
                style={{ padding: "5px", borderRadius: "5px", border: `1px solid ${activeInput === "username" ? "yellow" : "orange"}`, marginLeft: "10px" }} 
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Phone Number:</label>
              <input 
                type="text" 
                name="phoneNumber" 
                value={userProfile.phoneNumber} 
                onChange={handleInputChange} 
                onFocus={() => handleInputFocus("phoneNumber")} 
                onBlur={handleInputBlur} 
                style={{ padding: "5px", borderRadius: "5px", border: `1px solid ${activeInput === "phoneNumber" ? "yellow" : "orange"}`, marginLeft: "10px" }} 
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Email:</label>
              <input 
                type="text" 
                name="email" 
                value={userProfile.email} 
                onChange={handleInputChange} 
                onFocus={() => handleInputFocus("email")} 
                onBlur={handleInputBlur} 
                style={{ padding: "5px", borderRadius: "5px", border: `1px solid ${activeInput === "email" ? "yellow" : "orange"}`, marginLeft: "10px" }} 
              />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
              <button className="btn btn-secondary" onClick={handleCancelClick} style={{ marginLeft: "10px" }}>Cancel</button>
            </div>
          </>
        ) : (
          // Render user details in non-edit mode
          <>
            <p><strong>Name:</strong> {userProfile.username}</p>
            <p><strong>Phone Number:</strong> {userProfile.phoneNumber}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
              <button className="btn btn-danger" onClick={handleCloseClick} style={{ marginLeft: "10px" }}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
