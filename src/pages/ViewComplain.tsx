import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewComplain() {
    const { id } = useParams(); // Get the ID from route parameters
    const [complain, setComplain] = useState({
        query: "AC mounting",
        created_by: "Ramu",
        status: "pending",
        technicianID: "null",
        technicianName: "Sonu",
        acquire: true,
        working_date: "12 March",
        id: "1",
    });

    return (
        <div>
            {complain.id ? (
                <>
                    <h2>Complaint Details</h2>
                    <p>ID: {complain.id}</p>
                    <p>Query: {complain.query}</p>
                    <p>Created By: {complain.created_by}</p>
                    <p>Status: {complain.status}</p>
                    <p>Technician Name: {complain.technicianName}</p>
                    <p>Working Date: {complain.working_date}</p>
                </>
            ) : (
                <p>No complaint found with this ID.</p>
            )}
        </div>
    );
}

export default ViewComplain;
