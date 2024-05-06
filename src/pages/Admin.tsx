import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Admin.css'; // Import custom CSS if needed
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap'; // Import Button component from react-bootstrap
import technicianData from './technicianData.json';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useNavigate, Link } from 'react-router-dom';

interface Technician {
  id: number;
  name: string;
  specialization: { en: string; hi: string };
  image: string;
  location: { en: string; hi: string };
  contact: string;
}

function Admin() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("All Complaints");
  const Unregistred_Complained = [
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "Sonu",
      "acquire": true,
      "working_date": "12 March",
      id: "1"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "2"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "3"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "4"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "5"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "6"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "7"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "8"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "9"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March"
      , id: "10"
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
      "working_date": "12 March",
      id: "1"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "pending",
      "technicianID": "null",
      "technicianName": "",
      "acquire": true,
      "working_date": "12 March",
      id: "2"
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
      "working_date": "12 March",
      id: "1"
    },
    {
      "query": "AC mounting",
      "created_by": "Ramu",
      "status": "Completed",
      "technicianID": "311",
      "technicianName": "Raju",
      "acquire": true,
      "working_date": "12 March",
      id: "2"
    }
  ]

  const technicians: Technician[] = technicianData.technicians;

  const [search, setSearch] = useState<string>("");
  const [selectFilterTechnician, setselectFilterTechnician] = useState<string>("all");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // Filter technician
  const [FilterTechnician, setFilterTechnician] = useState<Technician[]>([]);


  useEffect(() => {
    let filteredTechnicians = technicianData.technicians;

    // Apply 'search' filter
    if (search) {
      filteredTechnicians = filteredTechnicians.filter(technician =>
        technician.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply 'selectFilterTechnician' filter
    if (selectFilterTechnician !== "all") {
      filteredTechnicians = filteredTechnicians.filter(technician =>
        technician.specialization.en === selectFilterTechnician
      );
    }

    setFilterTechnician(filteredTechnicians);
  }, [search, selectFilterTechnician, technicianData.technicians]);


  // Function to Remove technician
  const RemoveTechnician = (index: number, name: string) => {
    alert("Technician " + name + " removed");
  }

  // Function to Edit technician
  const EditTechnician = (index: number, name: string) => {
    navigate(`/add_technician/${index + 1}`)
  }



  return (
    <div>

      <div className='d-flex justify-content-end gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
        </svg>Welcome <span style={{ color: "#DBA800" }}>Admin</span>
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
                    <tr >
                      <th scope="col">S No.</th>
                      <th scope="col">Created by</th>
                      <th scope="col">Status</th>
                      <th scope="col">Query</th>
                      <th scope="col">Assign Tecnician</th>
                      <th scope='col'>Available time</th>
                      <th scope='col'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Unregistred_Complained.map((complaint, index) => {
                        return (
                          <tr key={index} style={{ cursor: "pointer" }}>
                            <th scope="row">{index + 1}</th>
                            <td>{complaint.created_by}</td>
                            <td>{complaint.status}</td>
                            <td>{complaint.query}</td>
                            <td>
                              <Button onClick={handleShow} variant="primary" style={{ backgroundColor: "#DBA800", border: "none", color: "white", marginBlock: "2px" }}>Assign technician</Button>
                            </td>
                            <td>1:00pm - 4:00pm</td>
                            <td >
                              <Link to={`/complain/${complaint.id}`} style={{ color: "black" }}>View Details</Link>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>

              {/* Pending Complaints */}
              <div className={`tab-pane fade ${activeTab === "Pending" ? "active show" : ""}`} id="Pending" role="tabpanel" aria-labelledby="Pending-tab">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S No.</th>
                      <th scope="col">Created by</th>
                      <th scope="col">Status</th>
                      <th scope="col">Query</th>
                      <th scope="col">Technician</th>
                      <th scope="col">Technician time: </th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Pending_Complained.map((complaint, index) => {
                        return (
                          <tr key={index} style={{ cursor: "pointer" }}>
                            <th scope="row">{index + 1}</th>
                            <td>{complaint.created_by}</td>
                            <td>{complaint.status}</td>
                            <td>{complaint.query}</td>
                            <td>{complaint.technicianName.length > 1 ? complaint.technicianName : "Not aquired"}</td>
                            <td>3:00pm - 4:00pm</td>
                            <td><Button onClick={handleShow} variant="primary" style={{ backgroundColor: "#DBA800", border: "none", color: "white" }}>Edit technician</Button></td>
                            <td >
                              <Link to={`/complain/${complaint.id}`} style={{ color: "black" }}>View Details</Link>
                            </td>
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Resolved_Complained.map((complaint, index) => {
                        return (
                          <tr key={index} style={{ cursor: "pointer" }}>
                            <th scope="row">{index + 1}</th>
                            <td>{complaint.created_by}</td>
                            <td style={{ color: "darkgreen" }}>{complaint.status}</td>
                            <td>{complaint.query}</td>
                            <td>{complaint.technicianName.length > 1 ? complaint.technicianName : "Not aquired"}</td>
                            <td >
                              <Link to={`/complain/${complaint.id}`} style={{ color: "black" }}>View Details</Link>
                            </td>
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
                  <div className='d-flex justify-content-between align-items-center gap-2'>
                    <input style={{ width: "70%" }} value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" name="technician_search" id="" />
                    <select name="filter" id="" value={selectFilterTechnician ? selectFilterTechnician : "all"}
                      onChange={(e) => setselectFilterTechnician(e.target.value)}>
                      <option value="all">All</option>
                      <option value="ac">AC</option>
                      <option value="refrigerator">Refrigerator</option>
                    </select>
                  </div>
                  <div>
                    {
                      FilterTechnician ? (
                        <Card style={{ width: '100%', overflowY: "scroll", height: "50vh" }} className='mt-3'>
                          <ListGroup variant="flush">
                            {
                              FilterTechnician.map((technician, index) => {
                                return (
                                  <ListGroup.Item style={{ cursor: "pointer" }} key={index} className='list_technician d-flex justify-content-between align-items-center cursor-pointer'>
                                    <div className=''>
                                      <h4>{technician.name}</h4>
                                      <p>{technician.specialization.en} Technician</p>
                                    </div>
                                    <div className='d-flex justify-content-center flex-column'>
                                      <pre>Free Slot: 2-4pm</pre>
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
                                      <div className='d-flex justify-content-center flex-column'>
                                        <pre>Free Slot: 2-4pm</pre>
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
            <Link to={'/add_technician'} >
              <td><Button type="button" className="btn btn-primary" variant="primary" style={{ backgroundColor: "#DBA800", border: "none", color: "white" }}>Add technician</Button></td>
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Technician ID</th>
                <th scope="col">Name</th>
                <th scope="col">Is Available</th>
                <th scope="col">Expert in</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                technicianData.technicians.map((technician, index) => {
                  return (
                    <tr key={index} style={{ cursor: "pointer" }}>
                      <th scope="row">{index + 1}</th>
                      <td>{technician.name}</td>
                      <td>10AM-8PM</td>
                      <td>{technician.specialization.en}</td>
                      <td onClick={() => EditTechnician(index, technician.name)} style={{ cursor: "pointer" }}><i className="fa fa-edit" style={{ color: "#DBA800" }}></i></td>
                      <td onClick={() => RemoveTechnician(index, technician.name)} style={{ cursor: "pointer" }}><i className="fa fa-trash" style={{ color: "red" }}></i></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}

export default Admin;



