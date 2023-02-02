import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import authHeader from "../services/auth-header";

const ListEmployeeComponent = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/test/admin", { headers: authHeader() })
      .then((res) => res.json())
      .then((result) => setEmployees(result))
      .catch((error) => console.log(error));
  });

  return (
    <div className="container">
      <br />
      <h2 className="text-center"> Employee Data... </h2>
      <br />
      
      <table className="table border table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee Email</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.employee_email}</td>
              <td>
                <Link to={"/EmployeeId/" + emp.id} target="_blank">
                  INFO
                </Link>
                {/* <a href={"/EmployeeId/" + emp.id} target="_blank">INFO</a> */}
       </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;