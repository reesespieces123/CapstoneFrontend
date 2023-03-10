import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import authHeader from "../services/auth-header";

const EmployeesTableComponent = () => {
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
      <h1>Employer Page</h1>
      <h3>Welcome {currentUser.username}</h3>
      <br />
      <h2 className="text-center"> Employee Table </h2>
      <br />
      
      <table className="table border table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>State</th>
            <th>Zip Code.</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.address}</td>
              <td>{emp.state}</td>
              <td>{emp.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTableComponent;