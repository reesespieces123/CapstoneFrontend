import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/DropdownComponent";
import "../styles/Landing.css";

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

            {/*<!----------IMPORT DROPDOWN COMPONENT----------!> */}
            <Dropdown />

            {/* <div className="container"> */}
            <br />
            <div className="text-center">
              {/* div className="row h-100 justify-content-center align-items-center"> */}
              <div className="text-center">
                {/* <div className="col-10 col-md-8 col-lg-6"> */}
                <form>
                  {/*<!-- Email input -->*/}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example1"
                      className="form-control"
                    />
                    <br />
                    <label className="form-label" htmlFor="form2Example1">
                      Email address
                    </label>
                  </div>

                  {/*<!-- Password input -->*/}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form2Example2">
                      Password
                    </label>
                  </div>

                  {/*<!-- 2 column grid layout for inline styling -->*/}
                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center"></div>
                  </div>

                  {/*<!-- Submit button -->*/}
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign in
                  </button>

                  {/*<!-- Register buttons -->*/}
                  <div className="text-center">
                    <p>
                      Not a member? <a href="/Register">Register</a>
                    </p>
                    {/* <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button> */}

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Landing;
