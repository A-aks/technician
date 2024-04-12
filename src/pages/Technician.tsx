import React, { useState } from 'react';
import technicianData from './technicianData.json';

export default function Technician() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const technicians = technicianData.technicians;

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
 

  const filteredTechnicians =
    selectedCategory === "All"
      ? technicians
      : technicians.filter(
          (technician) => technician.specialization === selectedCategory
        );

  return (
    <div className="container mt-4 ">
      <h1 className="mb-4 text-center">Technicians</h1>
      <div className="row mb-4 justify-content-center">
        <div className="col-md-8 ">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="AC">AC</option>
          </select>
        </div>
      </div>
      <div className="row mx-1 ">
        {filteredTechnicians.map((technician) => (
          <div key={technician.id} className="col-md-4 mb-4">
            <div className="card " style={{ width: "19rem" }}>
            <img src={technician.image} className="card-img-top " alt={technician.name} />
              <div className="card-body">
                <h5 className="card-title">{technician.name}</h5>
                <p className="card-text">
                  <strong>Specialization:</strong> {technician.specialization}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
