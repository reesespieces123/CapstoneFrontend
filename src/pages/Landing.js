import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import Login from "./Login";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {/*<!----------HEADER---------- */}
            <div className="text-center">
              <h1>New Employees</h1>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <br />
            <br />
            <br />
            <h1 className="text-center">First Visit?</h1>
            <br />
            {/*<--Button-->*/}
            <div className="text-center">
              <Link to="/Register" relative="path" className="btn btn-primary">
                Click Here
              </Link>
            </div>
          </div>

          <div className="vr"></div>
          <div className="col">
            <br />
            <br />
            <br />

            {/*<!----------SECOND PART OF PAGE---------- */}
            <h1 className="text-center">Returning?</h1>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
