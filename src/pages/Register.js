import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <br />
      <h1 className="text-center">Register Page Dummy</h1>
      <br />
      {/* <br /> */}
      <div className="container">
        <div className="row">
          <div className="card col-md-8 offset-md-2 offset-md-2">
            <br />
            <form className="row needs-validation" novalidate>
              <div className="row">
                <div className="col-sm">
                  <label htmlFor="validationCustom01" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Enter first name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm">
                  <label htmlFor="validationCustom02" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Enter last name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              {/*
               */}
              <div className="row">
                <div className="col-sm">
                  <label htmlFor="validationCustom01" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Enter @email.com"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-sm">
                  <label htmlFor="validationCustom01" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Enter password"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="col-12">
                <br />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <br />
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
