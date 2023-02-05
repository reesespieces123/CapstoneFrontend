import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import "ag-grid-enterprise";
import authHeader from "../services/auth-header";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

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
      filter: "agTextColumnFilter",
    },
    {
      field: "first_name",
      sortable: true,
      filter: "agTextColumnFilter",
    },
    { field: "last_name", sortable: true, filter: "agTextColumnFilter" },
    { field: "employee_email", sortable: true, filter: "agTextColumnFilter" },
    {
      field: "i-9 form",
      cellRenderer: (params) => {
        let link = `/EmployeeId/${params.data.id}`;
        return <Link to={link}>I-9 FORM</Link>;
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
        <div className="container">
          <br />

          <div className="row">
            <h2 className="text-left">Welcome Reviewer!</h2>
            <div
              className="ag-theme-material"
              style={{ height: 800, width: 1500 }}
            >
              <br />
              <br />
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
