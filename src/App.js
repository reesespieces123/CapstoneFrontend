import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardNewEmployee from "./components/BoardNewEmployee";
import BoardReviewer from "./components/BoardReviewer";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

//import Landing page
import Landing from "./pages/Landing";
//import Home page
// import Home from "./components/DropdownComponent";
// import Auditor page
import Auditor from "./pages/Auditor";
// import Employee page
import Employee from "./pages/Employee";

// import Register page
// import Register from "./pages/Register";
// import Form page
import Form from "./pages/EmployeePages/Form";
// import Form page
import Form2 from "./pages/Form-2";

//import all reviewer strucute here

// import Reviewer page
import Reviewer from "./pages/ReviewerPages/Reviewer";
import EmployeeTable from "./pages/ReviewerPages/EmployeeTable";
import Section2 from "./pages/ReviewerPages/Section2";

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
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          ADP Logo
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/reviewer"} className="nav-link">
                Reviewer Board
              </Link>
            </li>
          )}
          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/Section2"} className="nav-link">
                I-9 Section 2
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/NewEmployee"} className="nav-link">
                New Employee
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
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newemployee" element={<BoardNewEmployee />} />
          <Route path="/reviewer" element={<BoardReviewer />} />
          <Route path="/admin" element={<BoardAdmin />} />

          <Route exact path="/" element={<Landing />} />
          <Route path="/Home1" element={<Home />} />
          <Route path="/Auditor" element={<Auditor />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Reviewer" element={<Reviewer />} />
          {/*Register route*/}
          {/* <Route path="/Register" element={Register} /> */}
          <Route path="/Form" element={<Form />} />
          <Route path="/Form-2" element={<Form2 />} />
          {/*REVIEWER STRUCTURE */}
          <Route path="/Reviewer" element={<Reviewer />} />
          <Route path="/EmployeeTable" element={<EmployeeTable />} />
          <Route path="/Section2" element={<Section2 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
