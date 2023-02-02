import React, { useState, useEffect } from "react";
import ListEmployeeComponent from "../components/ListEmployeeComponent";
import UserService from "../reducers/user.service";

const BoardReviewer = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard().then(
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
      <ListEmployeeComponent />
    </>
  );
};

export default BoardReviewer;
