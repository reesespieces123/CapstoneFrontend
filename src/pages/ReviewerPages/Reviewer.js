import React from "react";
import { Link } from "react-router-dom";

const HomeReviewer = () => {
  return (
    <>
      <h1>Welcome "Reviewer name"</h1>
      <br />
      {/*EMPLOYEE CARD */}
      <div className="card">
        <div className="card-header">Title</div>
        <div className="card-body">
          <h5 className="card-title">Components</h5>
          <p className="card-text">
            To proceed with employees table click here
          </p>
          <Link to="/EmployeeTable" relative="path" className="btn btn-primary">
            Employee Table
          </Link>
        </div>
      </div>
      {/* SECTION 2 CARD
      <div className="card">
        <div className="card-header">Title</div>
        <div className="card-body">
          <h5 className="card-title">Components</h5>
          <p className="card-text">To proceed with Section 2 click here</p>
          <Link to="/Section2" relative="path" className="btn btn-primary">
            Section 2
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default HomeReviewer;
