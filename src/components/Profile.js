import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Welcome <strong>{currentUser.username}</strong>!
        </h3>
      </header>
      <p>
        Click here to begin your I-9! <br />
      </p>
      <div>
        <Link to="/NewEmployee" relative="path" className="btn btn-primary">
          Click Here
        </Link>
      </div>
      <p>
        {/* <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)} */}
        Already Filled Out Your I-9? <br />
        Click here to check your form status
      </p>
      <div>
        <Link to="/NewEmployee" relative="path" className="btn btn-primary">
          Click Here
        </Link>
      </div>
      <p>
        <strong>Your Employee Id Number:</strong> {currentUser.id}
      </p>
      <p>{/* <strong>Email:</strong> {currentUser.email} */}</p>
      {/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default Profile;
