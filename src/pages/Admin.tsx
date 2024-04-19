import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Admin.css'; // Import custom CSS if needed

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

      <div>
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
                  <th scope="col">Technician</th>
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
                        <td>{complaint.technicianName.length > 1 ? complaint.technicianName : "Not aquired"}</td>
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
        </div>
      </div>
    </div>
  );
}

export default Admin;
