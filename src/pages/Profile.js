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
        <Link to="/Section1" relative="path" className="btn btn-primary">
          Click Here
        </Link>
      </div>
      <br />
      <div>
        <p>Already Filled Out Your I-9?<br />Click here to check your form status</p>
        <Link to="/Home" relative="path" className="btn btn-primary">
          Click here
        </Link>
      </div>
      <br/>
      <p>
        <strong>Your Employee ID Number:</strong> {currentUser.id}
      </p>
    </div>
  );
};

export default Profile;
