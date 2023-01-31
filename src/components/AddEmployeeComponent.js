import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import i9Instructions from "../components/i9Instructions.pdf";
import "../styles/I9Form.css";

const AddEmployeeComponent = () => {
  const [socialSecurity, setSocialSecurity] = useState("");
  const [address, setAddress] = useState("");
  const [alienauthorizationnumber, setAlienauthorizationnumber] = useState("");
  const [aptnumber, setAptnumber] = useState("");

  const [citizenshipstatus, setCitizenshipstatus] = useState("");

  const [formadmissionnumber, setformadmissionnumber] = useState("");
  const [foreignpassportnumber, setforeignpassportnumber] = useState("");
  const [countryofissuance, setcountryofissuance] = useState("");
  const [expirationdate, setexpirationdate] = useState("");
  const [city, setCity] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [employee_email, setEmployee_email] = useState("");
  const [employeesignature, setEmployeesignature] = useState("");
  const [employeesignaturedate, setEmployeesignaturedate] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [middleinitial, setMiddleinitial] = useState("");
  const [otherlastname, setOtherlastname] = useState("");
  const [state, setState] = useState("");
  const [telephone, setTelephone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [preparestatus, setPreparerstatus] = useState("");
  const [preparersig, setPreparersig] = useState("");
  const [preparerdate, setPreparerdate] = useState("");
  const [preparerlast, setPreparerlast] = useState("");
  const [preparerfirst, setPreparerfirst] = useState("");
  const [prepareraddress, setPrepareraddress] = useState("");
  const [preparercity, setPreparercity] = useState("");
  const [preparerstate, setPreparerstate] = useState("");
  const [preparerzip, setPreparerzip] = useState("");

  const history = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const selectedCitizenshipStatus = document.querySelector(
      'input[name="citizenshipstatus"]:checked'
    ).value;

    const employee = {
      socialSecurity,
      address,
      alienauthorizationnumber,
      aptnumber,
      citizenshipstatus: selectedCitizenshipStatus,
      formadmissionnumber,
      foreignpassportnumber,
      countryofissuance,
      expirationdate,
      city,
      dateofbirth,
      employee_email,
      employeesignature,
      employeesignaturedate,
      first_name,
      last_name,
      middleinitial,
      otherlastname,
      state,
      telephone,
      zipcode,
      preparestatus,
      preparersig,
      preparerdate,
      preparerlast,
      preparerfirst,
      prepareraddress,
      preparercity,
      preparerstate,
      preparerzip,
    };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          history.push("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);

          history.push("/Employee");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setSocialSecurity(response.data.socialSecurity);
        setAddress(response.data.address);
        setAlienauthorizationnumber(response.data.alienauthorizationnumber);
        setAptnumber(response.data.aptnumber);
        setCitizenshipstatus(response.data.citizenshipstatus);

        setformadmissionnumber(response.data.formadmissionnumber);
        setforeignpassportnumber(response.data.foreignpassportnumber);
        setcountryofissuance(response.data.countryofissuance);
        setexpirationdate(response.data.expirationdate);
        setCity(response.data.city);
        setDateofbirth(response.data.dateofbirth);
        setEmployee_email(response.data.employee_email);
        setEmployeesignature(response.data.employeesignature);
        setEmployeesignaturedate(response.data.employeesignaturedate);
        setFirst_name(response.data.first_name);
        setLast_name(response.data.last_name);
        setMiddleinitial(response.data.middleinitial);
        setOtherlastname(response.data.otherlastname);
        setState(response.data.state);
        setTelephone(response.data.telephone);
        setPreparerstatus(response.data.preparestatus);
        setPreparersig(response.data.preparersig);
        setPreparerdate(response.data.preparerdate);
        setPreparerlast(response.data.preparerlast);
        setPreparerfirst(response.data.preparerfirst);
        setPrepareraddress(response.data.prepareraddress);
        setPreparercity(response.data.preparercity);
        setPreparerstate(response.data.preparerstate);
        setPreparerzip(response.data.preparerzip);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const title = () => {
  //   if (id) {
  //     return <h2 className="text-center">Update Employee</h2>;
  //   } else {
  //     return <h2 className="text-center">I-9 Section 1</h2>;
  //   }
  // };
  const title = () => {
    return (
      <>
        <h2 className="text-center">I-9 Section 1</h2>
      </>
    );
  };

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
              <li className="nav-item">
                <a className="nav-link " href="http://localhost:3000/Form">
                  I-9 Section 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/Section2">
                  I-9 Section 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Document Submissions
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />

        <div className="container">
          {/* -max-width: 1519px */}
          <br />
          <br />
          <div className="row">
            {/* -xxl */}
            <br />
            {/* "card col-md-6 offset-md-3 offset-md-3"  */}
            <br />
            {/* <div className="card col-lg-9 offset-sm-2"> */}

            <div className="card col-lg-12 ">
              {title()}
              <div className="container">
                {/* -xxl */}

                <br />
                <p className="paragraphs">
                  <p className="paragraphs">
                    <b>
                      ►START HERE: Read instructions carefully before completing
                      this form. The instructions must be available, either in
                      paper or electronically, during completion of this form.
                      Employers are liable for errors in the completion of this
                      form.
                    </b>
                  </p>
                  <p className="paragraphs">
                    <b>ANTI-DISCRIMINATION NOTICE:</b> It is illegal to
                    discriminate against work-authorized individuals. Employers{" "}
                    <b>CANNOT</b> specify which document(s) an employee may
                    present to establish employment authorization and identity.
                    The refusal to hire or continue to employ an individual
                    because the documentation presented has a future expiration
                    date may also constitute illegal discrimination.{" "}
                  </p>
                </p>
                {/* FORM STARTS HERE */}
                <form className="container">
                  {/* START OF DIV ROW */}
                  <div className="row">
                    {/* FIRST COL */}
                    <div className="col-4">
                      <label className="form-label">
                        Last Name (Family Name):
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        name="last_name"
                        className="form-control"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                      ></input>
                    </div>
                    {/* SECOND COL */}
                    <div className="col-3">
                      <label className="form-label">
                        First Name (Given Name):
                      </label>
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        name="first_name"
                        className="form-control"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                      ></input>
                    </div>
                    {/* THIRD COL */}
                    <div className="col-2">
                      <label className="form-label"> Middle Initial:</label>
                      <input
                        type="text"
                        placeholder="Enter Middle Initial"
                        name="middleinitial"
                        className="form-control"
                        value={middleinitial}
                        onChange={(e) => setMiddleinitial(e.target.value)}
                      ></input>
                    </div>
                    {/* FOURTH COL */}
                    <div className="col-3">
                      <label className="form-label">
                        Other Last Name (if any):
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Other Last Name"
                        name="otherlastname"
                        className="form-control"
                        value={otherlastname}
                        onChange={(e) => setOtherlastname(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* END OF DIV ROW */}
                  <br />
                  {/** //////////////////////////////////////////////////// */}
                  {/* SECOND DIV ROW */}
                  <div className="row">
                    {/* FIRST COL */}
                    <div className="col-4">
                      <label className="form-label">
                        Address (Street Number and Name):
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Address"
                        name="address"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      ></input>
                    </div>
                    {/* SECOND COL */}
                    <div className="col-2">
                      <label className="form-label">Apartment Number:</label>
                      <input
                        type="text"
                        placeholder="Enter Apartment Number"
                        name="aptnumber"
                        className="form-control"
                        value={aptnumber}
                        onChange={(e) => setAptnumber(e.target.value)}
                      ></input>
                    </div>
                    {/* THIRD COL */}
                    <div className="col-2">
                      <label className="form-label">City or Town:</label>
                      <input
                        type="text"
                        placeholder="Enter City"
                        name="city"
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      ></input>
                    </div>
                    {/* FOURTH COL */}
                    <div className="col-2">
                      <label className="form-label"> State:</label>
                      <input
                        type="text"
                        placeholder="Enter State"
                        name="state"
                        className="form-control"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      ></input>
                    </div>
                    {/* FIFTH COL */}
                    <div className="col-2">
                      <label className="form-label"> ZIP Code:</label>
                      <input
                        type="text"
                        placeholder="Enter Zip Code"
                        name="zipcode"
                        className="form-control"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* END OF SECOND DIV ROW */}
                  <br />
                  {/** //////////////////////////////////////////////////// */}
                  {/* THIRD DIV ROW */}
                  <div className="row">
                    {/* FIRST COL */}
                    <div className="col-3">
                      <label className="form-label">
                        Date of Birth (mm/dd/yyyy):
                      </label>
                      <input
                        type="date"
                        placeholder="Enter Date of Birth"
                        name="dateofbirth"
                        className="form-control"
                        value={dateofbirth}
                        onChange={(e) => setDateofbirth(e.target.value)}
                      ></input>
                    </div>
                    {/* SECOND COL */}
                    <div className="col-3">
                      <label className="form-label"> Social Security:</label>
                      <input
                        type="text"
                        placeholder="Enter Social Security Number"
                        name="SocialSecurity"
                        className="form-control"
                        value={socialSecurity}
                        onChange={(e) => setSocialSecurity(e.target.value)}
                      ></input>
                    </div>
                    {/* THIRD COL */}
                    <div className="col-3">
                      <label className="form-label">
                        Employee's Email Address:
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email address"
                        name="employee_email"
                        className="form-control"
                        value={employee_email}
                        onChange={(e) => setEmployee_email(e.target.value)}
                      ></input>
                    </div>
                    {/* FOURTH COL */}
                    <div className="col-3">
                      <label className="form-label">
                        Employee's Telephone Number:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Telephone number"
                        name="employee_telephone"
                        className="form-control"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* END OF THIRD DIV ROW */}
                  <br />
                  {/** //////////////////////////////////////////////////// */}
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
                  {/** //////////////////////////////////////////////////// */}
                  <label htmlFor="">Citizenship Status:</label>
                  {/* FOURTH DIV ROW */}
                  <div className="row">
                    {/* START OF UL */}
                    <ul className="list-unstyled checkbox-list">
                      {/* 1 */}
                      <li>
                        <input
                          type="radio"
                          name="citizenshipstatus"
                          id="citizen"
                          value="citizen"
                        />
                        <label htmlFor="citizen">
                          A citizen of the United States
                        </label>
                      </li>

                      <div className="space"></div>

                      {/* 2 */}
                      <li>
                        <input
                          type="radio"
                          name="citizenshipstatus"
                          id="noncitizennational"
                          value="noncitizennational"
                        />
                        <label htmlFor="noncitizennational">
                          A noncitizen national of the United States
                        </label>
                        <em>
                          <a target="_blank" href={i9Instructions}>
                            (See instructions)
                          </a>
                        </em>
                      </li>

                      <div className="space"></div>

                      {/* SECOND ROW  */}
                      <div className="row">
                        {/* FIRST COL */}
                        <div className="col-6">
                          <li>
                            <input
                              type="radio"
                              name="citizenshipstatus"
                              className="form-label"
                              id="lawfulpermanentresident"
                              value="lawfulpermanentresident"
                            />
                            <label htmlFor="lawfulpermanentresident">
                              A lawful permanent resident
                            </label>
                          </li>
                        </div>
                        {/* SECOND COL */}
                        <div className="col-6">
                          <input
                            type="text"
                            placeholder="Enter Alien Authorization Number"
                            name="alienauthorizationnumber"
                            className="form-control"
                            value={alienauthorizationnumber}
                            onChange={(e) =>
                              setAlienauthorizationnumber(e.target.value)
                            }
                          ></input>
                        </div>
                        <p className="small-text">
                          (Alien Authorization Number/USCIS Number):
                        </p>
                      </div>
                    </ul>
                    {/* END OF UL TAG */}
                  </div>
                  {/* END OF FOURTH DIV ROW */}
                  {/** //////////////////////////////////////////////////// */}
                  {/* START OF FIFTH DIV ROW */}
                  <div className="row">
                    {/* FIRST COL */}
                    <div className="col-9">
                      <input
                        type="radio"
                        className="form-label"
                        name="citizenshipstatus"
                        id="authorizedalien"
                        value="authorizedalien"
                      />
                      <label>
                        An alien authorized to work until (expiration date, if
                        applicable,
                      </label>
                      <label>mm/dd/yyyy):</label>
                    </div>
                    {/* SECOND COL */}
                    <div className="col-3">
                      <input
                        type="date"
                        placeholder="Enter expiration date"
                        name="expirationdate"
                        className="form-control"
                        value={expirationdate}
                        onChange={(e) => setexpirationdate(e.target.value)}
                      ></input>
                    </div>
                    {/* END OF FIFTH ROW */}
                    <label>
                      Some aliens may write "N/A" in the expiration date field.
                      <em>
                        <a target="_blank" href={i9Instructions}>
                          (See instructions)
                        </a>
                      </em>
                    </label>
                    <br />
                    <br />
                    <label>
                      <em className="m-text">
                        Aliens authorized to work must provide only one of the
                        following document numbers to complete Form I-9: An
                      </em>
                    </label>
                    <label>
                      <em className="m-text">
                        Alien Registration Number/USCIS Number OR Form I-94
                        Admission Number OR Foreign Passport Number.
                      </em>
                    </label>
                    <br />
                    <br />
                    {/* START OF OL TAG */}
                    <ol>
                      {/* 1 LI */}
                      <li>
                        <div className="row">
                          <div className="col-7">
                            <label>
                              Alien Registration Number/USCIS Number:
                            </label>
                          </div>
                          <div className="col-5">
                            <input
                              type="text"
                              placeholder="Enter Alien Authorization Number"
                              name="alienauthorizationnumber"
                              className="form-control"
                              value={alienauthorizationnumber}
                              onChange={(e) =>
                                setAlienauthorizationnumber(e.target.value)
                              }
                            ></input>
                          </div>
                        </div>
                      </li>
                      <br />
                      <strong className="big">OR</strong>
                      <br />
                      {/* 2 LI */}
                      <li>
                        <div className="row">
                          <div className="col-7">
                            <label>Form I-94 Admission Number:</label>
                          </div>

                          <div className="col-5">
                            <input
                              type="text"
                              placeholder="Enter Form I-94 Admission Number"
                              name="formaddmissionnumber"
                              className="form-control"
                              value={formadmissionnumber}
                              onChange={(e) =>
                                setformadmissionnumber(e.target.value)
                              }
                            ></input>
                          </div>
                        </div>
                      </li>

                      <br />
                      <strong className="big">OR</strong>
                      <br />
                      {/* 3 LI */}

                      <li>
                        <div className="row">
                          <div className="col-7">
                            <label>Foreign Passport Number:</label>
                          </div>
                          <div className="col-5">
                            <input
                              type="text"
                              placeholder="Enter Foreign Passport Number"
                              id="foreignpassportnumber"
                              className="form-control"
                              value={foreignpassportnumber}
                              onChange={(e) =>
                                setforeignpassportnumber(e.target.value)
                              }
                            />
                          </div>
                          <br />
                          <br />
                          <div className="row">
                            <div className="col-7">
                              <label>Country of Issuance:</label>
                            </div>

                            <div className="col-5">
                              <input
                                type="text"
                                placeholder="Enter Country of Issuance"
                                id="countryofissuance"
                                className="form-control"
                                value={countryofissuance}
                                onChange={(e) =>
                                  setcountryofissuance(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  {/* //////////////////////////////////////// */}
                  <div className="row">
                    <div className="col-6">
                      <label className="form-label">
                        {" "}
                        Employee Signature :
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Employee Signature"
                        name="employeesignature"
                        className="form-control"
                        value={employeesignature}
                        onChange={(e) => setEmployeesignature(e.target.value)}
                      ></input>
                    </div>

                    <div className="col-6">
                      <label className="form-label"> Signature Date :</label>
                      <input
                        type="date"
                        placeholder="Enter Date Signed"
                        name="employeesignaturedate"
                        className="form-control"
                        value={employeesignaturedate}
                        onChange={(e) =>
                          setEmployeesignaturedate(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                  <hr />
                  <h5>Preparer and/or Translator Certification (check one):</h5>
                  <label>
                    <em className="m-text">
                      (Fields below must be completed and signed when preparers
                      and/or translators assist an employee in completing
                      Section 1.)
                    </em>
                  </label>
                  <label>
                    <b className="m-text">
                      (Fields below must be completed and signed when preparers
                      and/or translators assist an employee in completing
                      Section 1.)
                    </b>
                  </label>
                  <br />
                  <form className="row g-3">
                    <div className="col-8">
                      <input
                        type="text"
                        placeholder="Signature of Preparer or Translator"
                        name="preparersig"
                        className="form-control"
                        value={preparersig}
                        onChange={(e) => setPreparersig(e.target.value)}
                      ></input>
                    </div>
                    <div className="col-4">
                      <input
                        type="date"
                        placeholder="Today's Date"
                        name="preparerdate"
                        className="form-control"
                        value={preparerdate}
                        onChange={(e) => setPreparerdate(e.target.value)}
                      ></input>
                    </div>

                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Last Name (Family Name)"
                        name="preparerlast"
                        className="form-control"
                        value={preparerlast}
                        onChange={(e) => setPreparerlast(e.target.value)}
                      ></input>
                    </div>

                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="First Name (Given Name)"
                        name="preparerfirst"
                        className="form-control"
                        value={preparerfirst}
                        onChange={(e) => setPreparerfirst(e.target.value)}
                      ></input>
                    </div>

                    <div className="col-5">
                      <input
                        type="text"
                        placeholder="Address (Street Number and Name)"
                        name="prepareraddress"
                        className="form-control"
                        value={prepareraddress}
                        onChange={(e) => setPrepareraddress(e.target.value)}
                      ></input>
                    </div>

                    <div className="col-4">
                      <input
                        type="text"
                        placeholder="City or Town"
                        name="preparercity"
                        className="form-control"
                        value={preparercity}
                        onChange={(e) => setPreparercity(e.target.value)}
                      ></input>
                    </div>

                    <div className="col-1">
                      <input
                        type="text"
                        placeholder="State"
                        name="preparerstate"
                        className="form-control"
                        value={preparerstate}
                        onChange={(e) => setPreparerstate(e.target.value)}
                      ></input>
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        name="preparerzip"
                        className="form-control"
                        value={preparerzip}
                        onChange={(e) => setPreparerzip(e.target.value)}
                      ></input>
                    </div>
                  </form>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col offset-md-3">
                      {/* <!-- SUBMIT trigger modal --> */}
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        SUBMIT
                      </button>

                      {/* <!-- Modal --> */}
                      <div
                        className="modal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                              >
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
                              Please ensure that all information is entered
                              correctly!
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                              >
                                Return
                              </button>
                              <button
                                type="submit"
                                className="btn btn-success"
                                onClick={(e) => saveOrUpdateEmployee(e)}
                                data-bs-dismiss="modal"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col offset-md">
                      {/* <!-- CANCEL trigger modal --> */}
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        CANCEL
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
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
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
                              Are you sure you want to cancel? This will result
                              in your data not being submitted or saved.
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>

                              <Link to="/Employee" className="btn btn-danger">
                                Continue
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /////////////////////////////// */}
                  {/*  */}
                </form>
                <br />
                <br />
                {/* FORM ENDS HERE */}
              </div>
            </div>
            <br />
            <br />
            {/* </div> */}
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default AddEmployeeComponent;
