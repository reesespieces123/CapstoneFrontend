import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card col-sm">
            <div className="container">
              <br />
              <h1 className="text-center">I-9 Submitted - Success!</h1>
              <br />
              <h3 className="text-center"> Next-Steps:</h3>
              <br />
              <h5 className="text-center">
                {" "}
                Submit necessary additional documents by email.
              </h5>
              <h5 className="text-center">
                For a list of acceptable documents click here.
              </h5>
              <h5 className="text-center">
                Check the approval status of your submission here
              </h5>
              <h5 className="text-center">
                Your email will serve as your username and the last 4 of your
                SSN will be your password.
              </h5>
              <h5 className="text-center">
                {" "}
                For any questions, email our HR team at HRhelp@adp.com
              </h5>
              <br />
              <h6 className="text-center">You may now leave this page and go back to your profile</h6>
              <div className="row justify-content-center">
                <Link to="/Profile" className="btn btn-success col-1">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
