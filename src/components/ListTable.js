import { Link } from "react-router-dom";

const Table = ({ employees }) => {
  return (
    <>
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
          {employees && employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.employee_email}</td>
              <td>
                <Link to={"/EmployeeId/" + emp.id}>INFO</Link>
                {/* <a href={"/EmployeeId/" + emp.id} target="_blank">INFO</a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
