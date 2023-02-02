import React from "react";
import { useState, useEffect } from "react";
import authHeader from "../services/auth-header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EmployeeId = () => {
  const [employee, setEmployee] = useState({});
  const { user: currentUser } = useSelector((state) => state.auth);
  const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/test/";
  const { id } = useParams();

  useEffect(() => {
    fetch(EMPLOYEE_BASE_REST_API_URL  + ( id ), { headers: authHeader()
    })
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  });


  return (
    <>
      <br />
      <h1>
        &nbsp;Welcome <strong>{currentUser.username}</strong>!
      </h1>
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
                <br />{" "}
                <div className="row">
                  <h5 className="text-center">I-9 Section 1</h5>
                  <div className="paragraphs">
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
                  </div>
                  <div className="col">
                    <label className="">
                      Last Name (Family Name): {employee.last_name}
                    </label>
                  </div>

                  <div className="col">
                    <label className="">
                      First Name (Given Name): {employee.first_name}
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      {" "}
                      Middle Initial: {employee.middleinitial}
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      Other Last Name (if any): {employee.otherlastname}
                    </label>
                  </div>
                </div>
                <br />
                {/* second row */}
                <div className="row">
                  <div className="col">
                    <label className="">Address: {employee.address}</label>
                  </div>
                  <div className="col">
                    <label className="">
                      Apartment Number: {employee.aptnumber}
                    </label>
                  </div>
                  <div className="col">
                    <label className="">City or Town: {employee.city} </label>
                  </div>
                  <div className="col">
                    <label className=""> State: {employee.state} </label>
                  </div>
                  <div className="col">
                    <label className=""> ZIP Code: {employee.zipcode} </label>
                  </div>
                </div>
                <br />
                {/* third row */}
                <div className="row">
                  <div className="col">
                    <label className="">
                      Date of Birth (mm/dd/yyyy): {employee.dateofbirth}
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      {" "}
                      Social Security: {employee.socialSecurity}
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      Email Address: {employee.employee_email}
                    </label>
                  </div>
                  <div className="col">
                    <label className="">
                      Telephone Number: {employee.telephone}
                    </label>
                  </div>
                </div>
                <br />
                {/* citizen part */}
                <div className="row">
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
                  </p>
                  <div className="row">
                    <label htmlFor="">Citizenship Status: </label>
                    <li>o A citizen of the United States{employee.citizen}</li>
                    <li>
                      o A noncitizen national of the United States(See
                      instructions){employee.noncitizennational}
                    </li>
                  </div>
                  <div className="row">
                    <div className="col">
                      <li>
                        o A lawful permanent resident{" "}
                        {employee.lawfulpermanentresident}
                      </li>
                      <p className="small-text">
                        (Alien Authorization Number/USCIS Number):
                      </p>
                    </div>
                    <div className="col">
                      {employee.alienauthorizationnumber}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <li>
                        o An alien authorized to work until:
                        {employee.authorizedalien}
                      </li>
                    </div>
                    <div className="col">
                      Expiration date: {employee.expirationdate}
                    </div>
                  </div>

                  <label>
                    Some aliens may write "N/A" in the expiration date field.
                    <em>
                      {/* <a target="_blank" href={i9Instructions}>
                          (See instructions)
                        </a> */}
                    </em>
                  </label>
                  <br />
                  <br />
                  <label>
                    <em className="m-text">
                      Aliens authorized to work must provide only one of the
                      following document numbers to complete Form I-9:
                    </em>
                  </label>
                  <label>
                    <em className="m-text">
                      Alien Registration Number/USCIS Number OR Form I-94
                      Admission Number OR Foreign Passport Number.
                    </em>
                  </label>
                </div>
                <br />
                {/* second part of citizen */}
                <div className="row">
                  <ol>
                    <li>
                      Alien Registration Number/USCIS Number:{" "}
                      {employee.alienauthorizationnumber}
                    </li>
                    <br />
                    <strong className="big">OR</strong>
                    <br />
                    <li>
                      Form I-94 Admission Number: {employee.formadmissionnumber}
                    </li>
                    <br />
                    <strong className="big">OR</strong>
                    <br />
                    <li>
                      Foreign Passport Number: {employee.foreignpassportnumber}{" "}
                      <p>Country of Issuance: {employee.countryofissuance}</p>
                    </li>
                  </ol>
                </div>
                <div className="row">
                  <h5>Employee Signature</h5>
                  <div className="col">
                    <label>Employee Signature: </label>
                    <label>&nbsp;{employee.employeesignature}</label>
                  </div>

                  <div className="col">
                    <label>Employee Signature Date: </label>
                    <label>&nbsp;{employee.employeesignaturedate}</label>
                  </div>
                  <br />
                  <br />
                  {/* preparer part */}
                  <div className="row">
                    <h5>Preparer and/or Translator Certification</h5>
                    <div className="col">
                      Signature of Preparer/Translator: {employee.preparersig}
                    </div>
                    <div className="col">
                      Date Signed: {employee.preparerdate}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      Last Name: {employee.preparerlast}
                    </div>
                    <div className="col">
                      First Name: {employee.preparerfirst}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      Address: {employee.prepareraddress}
                    </div>
                    <div className="col">City: {employee.preparercity}</div>
                    <div className="col">State: {employee.preparerstate}</div>
                    <div className="col">Zip Code: {employee.preparerzip}</div>
                  </div>
                </div>
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
