// import React from "react";
// import { useState, useEffect } from "react";
// //import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import authHeader from "../services/auth-header";
// import Table from "./ListTable";
// import axios from "axios";

// const ListEmployeeComponent = () => {
//   const { user: currentUser } = useSelector((state) => state.auth);

//   const [query, setQuery] = useState("");
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:8080/api/test/admin?q=${query}`, { headers: authHeader() });
//       setEmployees(res.employees);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="container">
//       <br />
//       <h1>Reviewer Page</h1>
//       <h3>Welcome {currentUser.username}</h3>
//       <br />

//       <h2 className="text-center"> Employee Data to review... </h2>
//       <br />

//       <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table employees={employees} />}

//       {/* <table className="table border table-hover">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Employee Email</th>
//             <th>Action(s)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>{emp.id}</td>
//               <td>{emp.first_name}</td>
//               <td>{emp.last_name}</td>
//               <td>{emp.employee_email}</td>
//               <td>
//                 <Link to={"/EmployeeId/" + emp.id}>INFO</Link>
//                 {/* <a href={"/EmployeeId/" + emp.id} target="_blank">INFO</a> */}
//               {/* </td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//     </div>
//   );
// };

// export default ListEmployeeComponent;

//{ headers: authHeader() }
// "http://localhost:8080/api/test/admin/"

import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import "ag-grid-enterprise";
import authHeader from "../services/auth-header";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  // const gridRef = useRef();
  //const { params } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/api/test/admin", { headers: authHeader() })
      .then((res) => res.json())
      .then((result) => setEmployees(result))
      .catch((error) => console.log(error));
  });

  const [columnDefs] = useState([
    {
      field: "id",
      sortable: true,
      //  filter: "agTextColumnFilter",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
    },
    {
      field: "first_name",
      sortable: true,
      filter: "agTextColumnFilter",
    },
    { field: "last_name", sortable: true, filter: "agTextColumnFilter" },
    { field: "employee_email", sortable: true, filter: "agTextColumnFilter" },
    {
      field: "actions",
      cellRenderer: params => {
        let link = `/EmployeeId/${params.data.id}`;
        return (
          <Link to={link} >{params.data.id}</Link>
          // <Link to={`/EmployeeId/${params.data.id}`} >{params.data.id}</Link>
        )
      },
     
    },
  ]);

  //  Adding the status bar elements
  const statusBar = useMemo(() => {
    return {
      statusPanels: [
        { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
        { statusPanel: "agTotalRowCountComponent", align: "center" },
        { statusPanel: "agFilteredRowCountComponent" },
        { statusPanel: "agSelectedRowCountComponent" },
        { statusPanel: "agAggregationComponent" },
      ],
    };
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  return (
    <>
      <div className="container-max-width: 1519px">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li>
                <a className="navbar-brand" href="#">
                  ADP Logo
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <br />
        <br />
        <br />

        <div className="container">
          <br />

          <div className="row">
            <br />
            <br />
            <h2 className="text-left">Welcome Reviewer!</h2>
            <br />
            <div
              className="ag-theme-material"
              style={{ height: 800, width: 1500 }}
            >
              <AgGridReact
                rowData={employees}
                columnDefs={columnDefs}
                rowSelection="multiple"
                animateRows={true}
                defaultColDef={defaultColDef}
                statusBar={statusBar}
                enableRangeSelection={true}
              ></AgGridReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListEmployeeComponent;
