import React, { useEffect } from 'react';
import technicianData from './technicianData.json';
import { useParams } from 'react-router-dom';

function AddTechnician() {

    const { id } = useParams();
    const [technicians, setTechnicians] = React.useState(technicianData.technicians);
    const [edit, setEdit] = React.useState(false);
    const [technician, setTechnician] = React.useState<typeof technicianData.technicians[0] | null>(null);

    React.useEffect(() => {
        if (id) {
            const technicianId = parseInt(id, 10);
            const foundTechnician = technicians.find((tech) => tech.id === technicianId);

            if (foundTechnician) {
                setTechnician(foundTechnician); // Correctly setting individual technician
                setEdit(true);
            } else {
                console.warn("Technician not found");
            }
        }
        else {
            setTechnician(null);
            setEdit(false);
        }
    }, [id]);

    const handleAddTechnician = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Technician added");
    };


    return (
        <div className="container"> {/* Use container to maintain screen width */}
            <h1 className='fs-4'>New Technician</h1>

            <form onSubmit={handleAddTechnician}>
                {/* Vertical layout */}
                <div className="mb-3">
                    <label htmlFor="technician-name" className="form-label">Name:</label>
                    <input value={technician ? technician.name : ""} onChange={(e) => {
                        if (technician) { // Only update if technician is not null
                            setTechnician({
                                ...technician, // Retain other properties
                                name: e.target.value, // Update the name
                            });
                        }
                    }} type="text" className="form-control custom-input" id="technician-name" required />
                </div>

                {/* Horizontal layout with Bootstrap row and col classes */}
                <div className="row">
                    <div className="col-md-6"> {/* Use responsive col classes */}
                        <div className="mb-3">
                            <label htmlFor="expert-in" className="form-label">Expert in:</label>
                            <input value={technician ? technician.specialization.en : ""} type="text" onChange={(e) => {
                                if (technician) {
                                    setTechnician({
                                        ...technician,
                                        specialization: {
                                            ...technician.specialization,
                                            en: e.target.value, // Correct syntax for nested object
                                        },
                                    });
                                }
                            }} className="form-control custom-input" id="expert-in" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="available-time" className="form-label">Available Time:</label>
                            <input type="text" value={technician ? technician.time : " "} onChange={(e) => {
                                if (technician) { // Only update if technician is not null
                                    setTechnician({
                                        ...technician, // Retain other properties
                                        time: e.target.value, // Update the name
                                    });
                                }
                            }} className="form-control custom-input" id="available-time" required />
                        </div>
                    </div>
                </div>

                {/* Another row with different fields */}
                <div className="row">
                    <div className="col-md-6"> {/* Ensure 12 or fewer combined col units */}
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input type="text" value={technician ? technician.location.en : ""} onChange={(e) => {
                                if (technician) { // Only update if technician is not null
                                    setTechnician({
                                        ...technician, // Retain other properties
                                        location: {
                                            ...technician.location,
                                            en: e.target.value, // Update the name
                                        }
                                    });
                                }
                            }} className="form-control custom-input" id="location" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="aadhar-number" className="form-label">Aadhaar Number:</label>
                            <input type="number" className="form-control custom-input" id="aadhar-number" required />
                        </div>
                    </div>
                </div>
                {/* Another row with different fields */}
                <div className="row">
                    <div className="col-md-6"> {/* Ensure 12 or fewer combined col units */}
                        <div className="mb-3">
                            <label htmlFor="account" className="form-label">Account number:</label>
                            <input type="number" className="form-control custom-input" id="account_nub" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="IFSC-number" className="form-label">IFSC Number:</label>
                            <input type="text" className="custom-input form-control" id="ifsc-number" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="branch-name" className="form-label">Branch Name:</label>
                            <input type="text" className="form-control custom-input" id="branch-number" required />
                        </div>
                    </div>
                </div>

                {/* Files grouped horizontally */}
                <div className="row">
                    <div className="col-md-6"> {/* Check for proper row/col structure */}
                        <div className="mb-3">
                            <label htmlFor="passbook-photo" className="form-label">Passbook Photo:</label>
                            <input type="file" className="form-control custom-input" id="passbook-photo" accept="image/*" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="aadhar-photo" className="form-label">Aadhaar Photo:</label>
                            <input type="file" className="form-control custom-input" id="aadhar-photo" accept="image/*" required />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end mt-3"> {/* Correct flex layout */}
                    <button type="button" className="btn btn-secondary" onClick={() => console.log("Close button clicked")}>
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary ms-2" style={{ backgroundColor: '#DBA800', border: 'none' }}>
                        Add Technician
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddTechnician;
