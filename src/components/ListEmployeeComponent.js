import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import "ag-grid-enterprise";

const ListEmployeeComponent = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
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
        <div className="container">
          <br />

          <div className="row">
            <br />
            <br />
            <h2 className="text-left">
              Welcome <strong>{currentUser.username}</strong>!
            </h2>
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
