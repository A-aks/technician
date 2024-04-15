import React, { useState } from 'react';
import technicianData from './technicianData.json';
import '../App.css';


export default function Technician() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const technicians = technicianData.technicians;

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const filteredTechnicians = technicians.filter(technician => {
    const byCategory = selectedCategory === "All" || technician.specialization === selectedCategory;
    const byLocation = selectedLocation === "All" || technician.location === selectedLocation;
    return byCategory && byLocation;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center" >Technicians</h1>
      <div className="row mb-4 justify-content-center">
        <div className="col-md-8 d-flex gap-2">
          <select
            className="form-select mb-2"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All Specializations</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="AC">AC</option>
          </select>
          <select
            className="form-select mb-2"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="All">All Location</option>
            <option value="Rewa">Rewa</option>
            <option value="Satna">Satna</option>
          
          </select>
        </div>
      </div>
      <div className="row  justify-content-center">
  {filteredTechnicians.map((technician) => (
    <div key={technician.id} className="col-md-5 mb-2">
      <div className="card d-flex flex-row  h-100 ">
        <div className="card-img-left" style={{ width: "35%", height: "auto" }}>
          <img
            src={technician.image}
            className="card-img img-fluid"
            alt={technician.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="card-body" style={{ width: "65%",  maxHeight: "130px"}}>
          <h5 className="card-title">{technician.name}</h5>
          <p className="card-text" style={{ marginBottom: "3px" }}>
            <strong>Specialization :</strong> {technician.specialization}
          </p>
          <p className="card-text" style={{ marginBottom: "3px" }}>
            <strong>Location :</strong> {technician.location}
          </p>
          {/* <p className="card-text">
            <strong>Contact :</strong> {technician.contact}
          </p> */}
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
