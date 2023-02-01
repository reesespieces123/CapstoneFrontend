import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

import UserService from "../reducers/user.service";
import AddEmployeeComponent from "./AddEmployeeComponent";
const BoardNewEmployee = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
      <AddEmployeeComponent />
    </>
  );
};

export default BoardNewEmployee;
