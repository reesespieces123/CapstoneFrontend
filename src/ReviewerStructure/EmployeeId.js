import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import authHeader from "../services/auth-header";
import { useSelector } from "react-redux";

const EmployeeId = (props) => {
  const [employee, setEmployee] = useState({});
  const { user: currentUser } = useSelector((state) => state.auth);

  const { id } = useParams();

  useEffect(() => {
    // fetch("http://localhost:8080/api/test/" + props.useParams.id, { headers: authHeader() })
    fetch(`http://localhost:8080/api/test/${id}`, { headers: authHeader() })
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  });

  // const displayEmployeeId(e){
  // };

  return (
    <>
      <br />
      {/* <h1>&nbsp;Welcome Reviewer Name</h1> */}
      <h1>Welcome {currentUser.username}</h1>
      <br />
      <h2 className="text-center">
        You are now <b>viewing</b>{" "}
        <em>
          {employee.first_name} {employee.last_name}(s){" "}
        </em>{" "}
        I-9 Form ...
      </h2>

      <div className="container">
        <div className="row">
          <div className="card col-lg">
            <div className="container">
              <form className="container">
                {/* first row */}
                <div className="row">
                  <h2 className="text-center">
                    Employment Eligibility Verification
                  </h2>
                  {/* 
                   <div className="paragraphs">
                    {" "}
                    <br />{" "}
                    <p className="paragraphs">
                      <b>
                        ►START HERE: Read instructions carefully before
                        completing this form. The instructions must be
                        available, either in paper or electronically, during
                        completion of this form. Employers are liable for errors
                        in the completion of this form.
                      </b>
                    </p>
                    <p className="paragraphs">
                      <b>ANTI-DISCRIMINATION NOTICE:</b> It is illegal to
                      discriminate against work-authorized individuals.
                      Employers <b>CANNOT</b> specify which document(s) an
                      employee may present to establish employment authorization
                      and identity. The refusal to hire or continue to employ an
                      individual because the documentation presented has a
                      future expiration date may also constitute illegal
                      discrimination.{" "}
                    </p>
                  </div>  */}
                  <h3>Section 1</h3>
                  <div className="col">
                    <label className="">
                      Last Name (Family Name):&nbsp;
                      <mark>
                        <b> {employee.last_name}&nbsp;</b>
                      </mark>
                    </label>
                  </div>

                  <div className="col">
                    <label className="">
                      First Name (Given Name):&nbsp;
                      <mark>
                        <b> {employee.first_name}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      {" "}
                      Middle Initial:&nbsp;
                      <mark>
                        <b> {employee.middleinitial}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      Other Last Name (if any):&nbsp;
                      <mark>
                        <b> {employee.otherlastname}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                </div>
                <br />
                {/* second row */}
                <div className="row">
                  <div className="col">
                    <label className="">
                      Address:&nbsp;
                      <mark>
                        <b> {employee.address}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      Apartment Number:&nbsp;
                      <mark>
                        <b> {employee.aptnumber}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      City or Town:&nbsp;
                      <mark>
                        <b> {employee.city}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      {" "}
                      State:&nbsp;
                      <mark>
                        <b> {employee.state}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      {" "}
                      ZIP Code:&nbsp;
                      <mark>
                        <b> {employee.zipcode}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                </div>
                <br />
                {/* third row */}
                <div className="row">
                  <div className="col">
                    <label className="">
                      Date of Birth (mm/dd/yyyy):&nbsp;
                      <mark>
                        <b> {employee.dateofbirth}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      {" "}
                      Social Security:&nbsp;
                      <mark>
                        <b> {employee.socialSecurity}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      Email Address:&nbsp;
                      <mark>
                        <b> {employee.employee_email}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      Telephone Number:&nbsp;
                      <mark>
                        <b> {employee.telephone}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                </div>
                <br />
                <hr />
                {/* citizen part */}
                {/* <div className="row">
                  <p className="paragraphs-2">
                    <b>
                      I am aware that federal law provides for imprisonment
                      and/or fines for false statements or use of false
                      documents in connection with the completion of this form.
                    </b>
                  </p>
                  <p className="paragraphs-2">
                    <b>
                      I attest, under penalty of perjury, that I am (check one
                      of the following boxes):
                    </b>
                  </p> */}
                <h3>Citizenship</h3>
                <p></p>
                <label className="">
                  Citizenship Status:&nbsp;
                  <mark>
                    <b> {employee.citizenshipstatus}&nbsp;</b>
                  </mark>
                </label>
                <br />
                <div className="col">
                  Expiration date:&nbsp;
                  <mark>
                    <b> {employee.expirationdate}&nbsp;</b>
                  </mark>
                </div>

                <br />
                {/* second part of citizen */}
                <div className="row">
                  <ol>
                    <li>
                      Alien Registration Number/USCIS Number:&nbsp;
                      <mark>
                        <b> {employee.alienauthorizationnumber}&nbsp;</b>
                      </mark>
                    </li>
                    <br />
                    <strong className="big">OR</strong>
                    <br />
                    <li>
                      Form I-94 Admission Number:&nbsp;
                      <mark>
                        <b> {employee.formadmissionnumber}&nbsp;</b>
                      </mark>
                    </li>
                    <br />
                    <strong className="big">OR</strong>
                    <br />
                    <li>
                      Foreign Passport Number:&nbsp;
                      <mark>
                        <b> {employee.foreignpassportnumber}&nbsp;</b>
                      </mark>
                    </li>
                    <br />
                    <p>
                      Country of Issuance:&nbsp;
                      <mark>
                        <b> {employee.countryofissuance}&nbsp;</b>
                      </mark>
                    </p>
                  </ol>
                </div>
                <hr />
                {/* //////////////////////////////////// */}
                <div className="row">
                  <h3>Employee Signature</h3>
                  <div className="col">
                    <label>
                      Employee Signature:&nbsp;
                      <mark>
                        <b>{employee.employeesignature}&nbsp;</b>
                      </mark>
                    </label>
                  </div>

                  <div className="col">
                    <label>
                      Employee Signature Date:&nbsp;
                      <mark>
                        <b>{employee.employeesignaturedate}&nbsp;</b>
                      </mark>
                    </label>
                  </div>
                  <br />
                  <br />
                  <br />

                  <hr />
                  {/* preparer part */}
                  <div className="row">
                    <h3>Preparer and/or Translator Certification</h3>
                    <p></p>
                    <div className="col">
                      Signature of Preparer/Translator:&nbsp;
                      <mark>
                        <b> {employee.preparersig}&nbsp;</b>
                      </mark>
                    </div>

                    <div className="col">
                      Date Signed:&nbsp;
                      <mark>
                        <b> {employee.preparerdate}&nbsp;</b>
                      </mark>
                    </div>
                  </div>
                  <p></p>
                  <div className="row">
                    <div className="col">
                      Last Name:&nbsp;
                      <mark>
                        <b> {employee.preparerlast}&nbsp;</b>
                      </mark>
                    </div>
                    <div className="col">
                      First Name:&nbsp;
                      <mark>
                        <b> {employee.preparerfirst}&nbsp;</b>
                      </mark>
                    </div>
                  </div>
                  <p></p>
                  <div className="row">
                    <div className="col">
                      Address:&nbsp;
                      <mark>
                        <b> {employee.prepareraddress}&nbsp;</b>
                      </mark>
                    </div>
                    <div className="col">
                      City:&nbsp;
                      <mark>
                        <b> {employee.preparercity}&nbsp;</b>
                      </mark>
                    </div>
                    <div className="col">
                      State:&nbsp;
                      <mark>
                        <b> {employee.preparerstate}&nbsp;</b>
                      </mark>
                    </div>
                    <div className="col">
                      Zip Codee:&nbsp;
                      <mark>
                        <b> {employee.preparerzip}&nbsp;</b>
                      </mark>
                    </div>
                  </div>
                </div>
                <br />
                <hr />
                <br/>
                <h4>
                  Continue to complete {employee.first_name}'s Section 2 Form:{" "}
                </h4>
                
                {/* /// */}
                {/* <!-- CONTINUE trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  SECTION 2
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  data-bs-backdrop="false"
                  data-bs-keyboard="false"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          ALERT
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you have reviewed {employee.first_name}'s' I-9
                        Form? If YES continue to Section 2.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Return
                        </button>

                        <Link to="/Section2" className="btn btn-success">
                          Section 2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* /// */}

                {/* /// */}

                <br />
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default EmployeeId;
