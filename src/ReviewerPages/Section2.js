import React, { useState, useEffect} from "react";
import UserService from "../reducers/user.service";
import AddRepresentativeComponent from "../components/AddRepresentativeComponent";


const Section2 = () =>{
// const BoardNewRepresentative = () => {

// const [content, setContent] = useState("");

// useEffect(() => {
//   UserService.getUserBoard().then(
//     (response) => {
//       setContent(response.data);
//     },
//     (error) => {
//       const_content =
//       (error.response &&
//         error.response.data &&
//         error.response.data.message) ||
//         error.message ||
//         error.toString();

//         setContent(content);
//     }
//   );
// },[]);


  return (
    <>
      <AddRepresentativeComponent />
    </>
  );
};

export default Section2;
