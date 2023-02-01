import React from "react";
import { Link } from "react-router-dom";


const Employee = () => {
    return (
        <>
        <h1>EMPLOYEE PAGE DUMMY</h1>
        <Link to="/Form" relative="path" className="btn btn-primary">
          I-9 Form
        </Link>
        
        </>
    )
}

export default Employee;