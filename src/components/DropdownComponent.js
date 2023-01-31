import React from "react";
//import style sheet
import "../styles/Dropdown.css";

const Dropdown = () => {
  return (
    <>
    <br/>
      <div>
        <h1 className="title">ADP Systems</h1>
        <br />
      </div>

<div className="menu">
      <div className="btn-group dropend-center">
        <button type="button" className="btn btn-outline-danger">
          SELECT
        </button>
        <button
          type="button"
          className="btn btn-outline-danger dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden"> </span>
        </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/Auditor">
                Auditor
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Employee">
                Employee
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Reviewer">
                Reviewer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
