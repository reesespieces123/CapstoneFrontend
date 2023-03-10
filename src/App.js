import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// testing
import Landing from "./pages/Landing";
//import adp from "./images/logo.svg";

// Login/Register connectivity pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/Home";
import Profile from "./pages/Profile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

// import Auditor page
import Auditor from "./AuditorStructure/Auditor";

// EMPLOYEE PAGES
// section 1 form for employee
import Section1 from "./EmployeeStructure/Section1";
// after submitting - success page
import Success from "./EmployeeStructure/Success";

// REVIEWER PAGES //
// section 2 for reviewer
import Section2 from "./ReviewerStructure/Section2";
// table
import BoardReviewer from "./ReviewerStructure/BoardReviewer";
// renders each employee id to its own page
import EmployeeId from "./ReviewerStructure/EmployeeId";
// list of employers table
import EmployeesTableComponent from "./EmployerStructure/EmployeesTableComponent";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }
  }, [currentUser]);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <Link to={"/Landing"} className="navbar-brand">
          &nbsp;	&nbsp;
          {/* <img src={adp} alt="logo" height="35" /> */}
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/auditor"} className="nav-link">
                Auditor Board
              </Link>
            </li>
          )}

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/EmployeeTable"} className="nav-link">
                Employer Board
              </Link>
            </li>
          )}
          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/reviewer"} className="nav-link">
                Reviewer Board
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/Landing" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li> */}
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          {/* testing */}
          <Route exact path="/Landing" element={<Landing />} />

          {/* HOME PAGE */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          {/* AUDITOR PATHS */}
          <Route path="/Auditor" element={<Auditor />} />
          {/* EMPLOYER PATHS */}
          <Route path="/EmployeeTable" element={<EmployeesTableComponent />} />
          {/* EMPLOYEE PATHS */}
          <Route path="/Section1" element={<Section1 />} />
          <Route path="/Success" element={<Success />} />
          {/*REVIEWER PATHS */}
          <Route path="/Reviewer" element={<BoardReviewer />} />
          <Route path="/Section2" element={<Section2 />} />
          <Route path="/EmployeeId/:id" element={<EmployeeId />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
