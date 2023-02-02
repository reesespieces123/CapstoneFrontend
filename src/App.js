import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/Home";
import Profile from "./pages/Profile";
import Empty from "./pages/Empty";
import BoardReviewer from "./ReviewerStructure/BoardReviewer";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";


// import Auditor page
import Auditor from "./pages/Auditor";


// import Employee page
import EmployeeId from "./ReviewerStructure/EmployeeId";
import Section1 from "./EmployeeStructure/Section1";


// import Reviewer page
import Section2 from "./ReviewerStructure/Section2";


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
          {/* {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/Section2"} className="nav-link">
                I-9 Section 2
              </Link>
            </li>
          )} */}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/EMPTY"} className="nav-link">
                EMPTY PAGE
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
          {/* HOME PAGE */}
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* ////////////////////////////////////////////////////// */}
          <Route path="/Empty" element={<Empty />} />
          
          <Route path="/Admin" element={<BoardAdmin />} />

          
          <Route path="/Home1" element={<Home />} />
          <Route path="/Auditor" element={<Auditor />} />
          

          {/*Register route*/}
          {/* <Route path="/Register" element={Register} /> */}

          {/* EMPLOYEE STRUCTURE */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/Section1" element={<Section1 />} />

          {/*REVIEWER STRUCTURE */}
          <Route path="/Reviewer" element={<BoardReviewer />} />
          
          <Route path="/Section2" element={<Section2 />} />
          <Route path="/EmployeeId/:id" element={<EmployeeId />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
