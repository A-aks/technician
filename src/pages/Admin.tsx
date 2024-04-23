import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Admin.css'; // Import custom CSS if needed
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap'; // Import Button component from react-bootstrap
import technicianData from './technicianData.json';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

interface Technician {
  id: number;
  name: string;
  specialization: { en: string; hi: string };
  image: string;
  location: { en: string; hi: string };
  contact: string;
}

function Admin() {
  const [activeTab, setActiveTab] = React.useState("All Complaints");
  const Unregistred_Complained = [
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "Sonu",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    }
  ]

  const Pending_Complained = [
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "Sonu",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
    }
  ]

  const Resolved_Complained = [
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "Completed",
      "technicianID": "2131",
      "technicianName": "Sonu",
      "acquire": true,
      "working_date": "12 March"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "Completed",
      "technicianID": "311",
      "technicianName": "Raju",
      "acquire": true,
      "working_date": "12 March"
    }
  ]

  const technicians: Technician[] = technicianData.technicians;

  const [search, setSearch] = useState<string>("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // Function to Add technician
  const AddTechnician = (e: any) => {
    e.preventDefault();
    alert("Technician added");
  }

  // Function to Remove technician
  const RemoveTechniciab = (index: number, name: string) => {
    alert("Technician " + name + " removed");
  }



  return (
    <div>
      <div className="profile d-flex justify-content-center align-items-center">
        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-card-wrapper">
              <div className="card-header"></div>
              {/* card-header */}
              <div className="card-profile">
                <img
                  src="https://stupendous-lily-560d0d.netlify.app/assets/Admin-GvlX_wrk.jpg"
                  alt="Profile"
                />
              </div>
              {/* card-profile */}
              <div className="card-content text-center rounded-buttons">
                <h3 className="card-title">Amit......</h3>
                <p className="text">
                  Lorem ipsum dolor sit amet, sed magna etiam adipiscing elit. Mauris id elit tempor, dolor sed curabitur id justo congue, facilisis sem justo. Integer ut facilisis turpis. Praesent amet ullamcorper ante nec ipsum dolor.
                </p>
                <button
                  className="btn primary-btn rounded-full"
                  data-toggle="modal"
                  data-target="#contact-modal"
                >
                  Get In Touch
                </button>
              </div>
              {/* card-content */}
              <div className="card-social text-center">
                <ul>
                  <li>
                    <a
                      className="btn primary-btn-outline rounded-full icon-btn btn-sm facebook"
                      href="javascript:void(0)"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn primary-btn-outline rounded-full icon-btn btn-sm twitter"
                      href="javascript:void(0)"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn primary-btn-outline rounded-full icon-btn btn-sm instagram"
                      href="javascript:void(0)"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn primary-btn-outline rounded-full icon-btn btn-sm linkedin"
                      href="javascript:void(0)"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Complaints + Technician tab*/}

      <ul className="nav nav-tabs mb-3 mx-2" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active btn-com" id="Complaints-tab" data-bs-toggle="tab" data-bs-target="#Complaints-tab-pane" type="button" role="tab" aria-controls="Complaints-tab-pane" aria-selected="true" >Complaints</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="technician-tab" data-bs-toggle="tab" data-bs-target="#technician-tab-pane" type="button" role="tab" aria-controls="technician-tab-pane" aria-selected="false">Technician</button>
        </li>
      </ul>


      <div className="tab-content" style={{ backgroundColor: "#" }} id="myTabContent">

        {/* Complaints tab */}
        <div className="tab-pane fade show active" id="Complaints-tab-pane" role="tabpanel" aria-labelledby="Complaints-tab" tabIndex={0}>
          <div className='mt-2'>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${activeTab == "All Complaints" ? "active" : ""}`} id="All Complaints-tab" data-bs-toggle="tab" data-bs-target="#All Complaints" type="button" role="tab" aria-controls="All Complaints" aria-selected={activeTab === "All Complaints"} onClick={() => setActiveTab("All Complaints")}>All Complaints</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${activeTab == "Pending" ? "active" : ""}`} id="Pending-tab" data-bs-toggle="tab" data-bs-target="#Pending" type="button" role="tab" aria-controls="Pending" aria-selected={activeTab === "Pending"} onClick={() => setActiveTab("Pending")}>Pending</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${activeTab == "Resolved" ? "active" : ""}`} id="Resolved-tab" data-bs-toggle="tab" data-bs-target="#Resolved" type="button" role="tab" aria-controls="Resolved" aria-selected={activeTab === "Resolved"} onClick={() => { setActiveTab("Resolved") }}>Resolved</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className={`tab-pane fade show ${activeTab === "All Complaints" ? "active show" : ""}`} id="All Complaints" role="tabpanel" aria-labelledby="All Complaints-tab">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S No.</th>
                      <th scope="col">Created by</th>
                      <th scope="col">Status</th>
                      <th scope="col">Query</th>
                      <th scope="col">Assign Tecnician</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Unregistred_Complained.map((complaint, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{complaint.created_by}</td>
                            <td>{complaint.status}</td>
                            <td>{complaint.query}</td>
                            <td><Button onClick={handleShow} variant="primary" style={{ backgroundColor: "#DBA800", border: "none", color: "white" }}>Assign technician</Button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className={`tab-pane fade ${activeTab === "Pending" ? "active show" : ""}`} id="Pending" role="tabpanel" aria-labelledby="Pending-tab">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S No.</th>
                      <th scope="col">Created by</th>
                      <th scope="col">Status</th>
                      <th scope="col">Query</th>
                      <th scope="col">Technician</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Pending_Complained.map((complaint, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{complaint.created_by}</td>
                            <td>{complaint.status}</td>
                            <td>{complaint.query}</td>
                            <td>{complaint.technicianName.length > 1 ? complaint.technicianName : "Not aquired"}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className={`tab-pane fade ${activeTab === "Resolved" ? "active show" : ""}`} id="Resolved" role="tabpanel" aria-labelledby="Resolved-tab">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S No.</th>
                      <th scope="col">Created by</th>
                      <th scope="col">Status</th>
                      <th scope="col">Query</th>
                      <th scope="col">Technician</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Resolved_Complained.map((complaint, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{complaint.created_by}</td>
                            <td style={{ color: "darkgreen" }}>{complaint.status}</td>
                            <td>{complaint.query}</td>
                            <td>{complaint.technicianName.length > 1 ? complaint.technicianName : "Not aquired"}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>

              {/* Technician Add Modal */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Technicians from list below...</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                  <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" name="technician_search" id="" />

                  <div>
                    {
                      search.length > 0 ? (
                        <Card style={{ width: '100%', overflowY: "scroll", height: "50vh" }} className='mt-3'>
                          <ListGroup variant="flush">
                            {
                              technicianData.technicians.filter((technician) => technician.name.toLowerCase().includes(search.toLowerCase())).map((technician, index) => {
                                return (
                                  <ListGroup.Item style={{ cursor: "pointer" }} key={index} className='list_technician d-flex justify-content-between align-items-center cursor-pointer'>
                                    <div className=''>
                                      <h4>{technician.name}</h4>
                                      <p>{technician.specialization.en} Technician</p>
                                    </div>
                                    <div>
                                      <p>{technician.location.en}</p>
                                      <button style={{ backgroundColor: "#DBA800", border: "black", color: "white" }} className="btn btn-technician" onClick={() => { alert("Technician added") }}>Add</button>
                                    </div>
                                  </ListGroup.Item>
                                )
                              })
                            }
                          </ListGroup>
                        </Card>
                      ) :
                        (
                          <Card style={{ width: '100%', overflowY: "scroll", height: "50vh" }} className='mt-3'>
                            <ListGroup variant="flush">
                              {
                                technicianData.technicians.map((technician, index) => {
                                  return (
                                    <ListGroup.Item style={{ cursor: "pointer" }} key={index} className='list_technician d-flex justify-content-between align-items-center cursor-pointer'>
                                      <div className=''>
                                        <h4>{technician.name}</h4>
                                        <p>{technician.specialization.en} Technician</p>
                                      </div>
                                      <div>
                                        <p>{technician.location.en}</p>
                                        <button style={{ backgroundColor: "#DBA800", border: "black", color: "white" }} className="btn btn-technician" onClick={() => { alert("Technician added") }}>Add</button>
                                      </div>
                                    </ListGroup.Item>
                                  )
                                })
                              }
                            </ListGroup>
                          </Card>
                        )
                    }
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button style={{ backgroundColor: "#DBA800", border: "none", color: "white" }} variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>


        {/* Technician Tab */}
        <div className="tab-pane fade" id="technician-tab-pane" role="tabpanel" aria-labelledby="technician-tab" tabIndex={0}>
          <div className='d-flex justify-content-end mr-3'>
            <td><Button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" variant="primary" style={{ backgroundColor: "#DBA800", border: "none", color: "white" }}>Add technician</Button></td>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Technician ID</th>
                <th scope="col">Name</th>
                <th scope="col">Is Available</th>
                <th scope="col">Expert in</th>
              </tr>
            </thead>
            <tbody>
              {
                technicianData.technicians.map((technician, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{technician.name}</td>
                      <td>10AM-8PM</td>
                      <td>{technician.specialization.en}</td>
                      <td onClick={() => RemoveTechniciab(index, technician.name)} style={{ cursor: "pointer" }}><i className="fa fa-trash" style={{ color: "red" }}></i></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>



          {/* Modal to Add technician */}

          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">New Technician</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                      <input type="text" className="form-control add-foucs" id="recipient-name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Expert in:</label>
                      <input type="text" className="form-control add-foucs" id="expert-in" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="avl-time-in" className="col-form-label">Available Time:</label>
                      <input type="text" className="form-control add-foucs" id="avl-time-in" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="location-in" className="col-form-label">Location :</label>
                      <input type="text" className="form-control add-foucs" id="location-in" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={(e) => { AddTechnician(e) }} style={{ backgroundColor: "#DBA800", border: "none" }} className="btn btn-primary">Add Technician</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;



