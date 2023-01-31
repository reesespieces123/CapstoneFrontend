import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import "ag-grid-enterprise";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/employees")
      .then((result) => result.json())
      .then((employees) => setEmployees(employees));
  }, []);

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
