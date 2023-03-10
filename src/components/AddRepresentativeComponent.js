import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RepresentativeService from "../services/RepresentativeService";
import i9Instructions from "../components/i9Instructions.pdf";
import EmployeeId from "../ReviewerStructure/EmployeeId";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const AddRepresentativeComponent = () => {
  const [representative, setRepresentative] = useState({
    DocumentTitle_A1: "",
    IssuingAuthority_A1: "",
    DocumentNumber_A1: "",
    ExpirationDate_A1: "",
    DocumentTitle_A2: "",
    IssuingAuthority_A2: "",
    DocumentNumber_A2: "",
    ExpirationDate_A2: "",
    DocumentTitle_A3: "",
    IssuingAuthority_A3: "",
    DocumentNumber_A3: "",
    ExpirationDate_A3: "",
    Document_Title_B: "",
    IssuingAuthority_B: "",
    DocumentNumber_B: "",
    ExpirationDate_B: "",
    AdditionalInfo_B: "",

    DocumentTitle_C: "",
    IssuingAuthority_C: "",
    DocumentNumber_C: "",
    ExpirationDate_C: "",
    RepresentativeSignature: "",
    RepresentativeSignDate: "",
    PreparerSignatureDate: "",
    RepresentativeTitle: "",
    RepresentativeFirstName: "",
    RepresentativeLastName: "",
    OrganizationName: "",
    OrganizationAddress: "",
    OrganizationCity: "",
    OrganizationState: "",
    OrganizationZipCode: "",
  });

  const history = useNavigate();
  const { id } = useParams();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (event.target.type === "radio") {
      setRepresentative({ ...representative, [name]: value });
    } else {
      setRepresentative({ ...representative, [name]: value });
    }
  };

  const saveOrUpdateRepresentative = (e) => {
    e.preventDefault();

    if (id) {
      RepresentativeService.updateRepresentative(id, representative)
        .then((response) => {
          history.push("/representatives");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      RepresentativeService.createRepresentative(representative)
        .then((response) => {
          history.push("/reviewer");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      RepresentativeService.getRepresentativeById(id)
        .then((response) => {
          setRepresentative({
            DocumentTitle_A1: response.data.DocumentTitle_A1,
            IssuingAuthority_A1: response.data.IssuingAuthority_A1,
            DocumentNumber_A1: response.data.DocumentNumber_A1,
            ExpirationDate_A1: response.data.ExpirationDate_A1,
            DocumentTitle_A2: response.data.DocumentTitle_A2,

            IssuingAuthority_A2: response.data.IssuingAuthority_A2,
            DocumentNumber_A2: response.data.DocumentNumber_A2,
            ExpirationDate_A2: response.data.ExpirationDate_A2,
            DocumentTitle_A3: response.data.DocumentTitle_A3,
            IssuingAuthority_A3: response.data.IssuingAuthority_A3,
            DocumentNumber_A3: response.data.DocumentNumber_A3,
            ExpirationDate_A3: response.data.ExpirationDate_A3,
            DocumentTitle_B: response.data.DocumentTitle_B,
            IssuingAuthority_B: response.data.IssuingAuthority_B,
            DocumentNumber_B: response.data.DocumentNumber_B,
            ExpirationDate_B: response.data.ExpirationDate_B,
            AdditionalInfo_B: response.data.AdditionalInfo_B,
            DocumentTitle_C: response.data.DocumentTitle_C,
            IssuingAuthority_C: response.data.IssuingAuthority_C,
            DocumentNumber_C: response.data.DocumentNumber_C,
            ExpirationDate_C: response.data.ExpirationDate_C,
            RepresentativeSignature: response.data.RepresentativeSignature,
            RepresentativeSignDate: response.data.RepresentativeSignDate,
            RepresentativeTitle: response.data.RepresentativeTitle,
            RepresentativeFirstName: response.data.RepresentativeFirstName,
            RepresentativeLastName: response.data.RepresentativeLastName,
            OrganizationName: response.data.OrganizationName,
            OrganizationAddress: response.data.OrganizationAddress,
            OrganizationCity: response.data.OrganizationCity,
            OrganizationState: response.data.OrganizationState,
            OrganizationZipCode: response.data.OrganizationZipCode,
          });
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const title = () => {
    return (
      <>
        <h2 className="text-center">Employment Eligibility Verification</h2>
      </>
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveOrUpdateRepresentative();
      }}
    >
      <div>
        <div className="container-max-width: 1519px">
          <div className="container">
            <div className="row">
              <br />
              <br />
              {/* "card col-md-6 offset-md-3 offset-md-3"  */}
              <div className="card col-lg-12">
                {title()}
                <br />
                <div className="container">
                  <div>
                    <h4>
                      Section 2. Employer or Authorized Representative Review
                      and Verification{" "}
                    </h4>
                    <p className="paragraphs">
                      (Employers or their authorized representative must
                      complete and sign Section 2 within 3 business days of the
                      employee's first day of employment. You must physically
                      examine one document from List A OR a combination of one
                      document from List B and one document from List C as
                      listed on the{" "}
                      <a href={i9Instructions} target="_blank">
                        "List of Acceptable Documents."
                      </a>
                      )
                    </p>
                  </div>
                  {/* FORM STARTS HERE */}
                  <div className="container">
                    {/* START OF DIV ROW */}
                    <br />
                    {/* FIRST COL */}
                    <div className="row">
                      <div className="col-md">
                        <h5 className="text-center">List A</h5>
                        <h6 className="text-center">
                          Identity and Employment Authorization
                        </h6>
                        <div>
                          <input
                            type="text"
                            placeholder="Document Title"
                            name="DocumentTitle_A1"
                            className="form-control"
                            value={representative.DocumentTitle_A1}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="text"
                            placeholder="Issuing Authority"
                            name="IssuingAuthority_A1"
                            className="form-control"
                            value={representative.IssuingAuthority_A1}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="text"
                            placeholder="Document Number"
                            name="DocumentNumber_A1"
                            className="form-control"
                            value={representative.DocumentNumber_A1}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="date"
                            placeholder="Expiration Date"
                            name="ExpirationDate_A1"
                            className="form-control"
                            value={representative.ExpirationDate_A1}
                            onChange={(e) => handleInputChange(e)}
                          ></input>
                        </div>
                        <br></br>
                        <div>
                          <input
                            type="text"
                            placeholder="Document Title"
                            name="DocumentTitle_A2"
                            className="form-control"
                            value={representative.DocumentTitle_A2}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="text"
                            placeholder="Issuing Authority"
                            name="IssuingAuthority_A2"
                            className="form-control"
                            value={representative.IssuingAuthority_A2}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="text"
                            placeholder="Document Number"
                            name="DocumentNumber_A2"
                            className="form-control"
                            value={representative.DocumentNumber_A2}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="date"
                            placeholder="Expiration Date"
                            name="ExpirationDate_A2"
                            className="form-control"
                            value={representative.ExpirationDate_A2}
                            onChange={(e) => handleInputChange(e)}
                          ></input>
                        </div>
                        <br></br>
                        <div>
                          <input
                            type="text"
                            placeholder="Document Title"
                            name="DocumentTitle_A3"
                            className="form-control"
                            value={representative.DocumentTitle_A3}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="text"
                            placeholder="Issuing Authority"
                            name="IssuingAuthority_A3"
                            className="form-control"
                            value={representative.IssuingAuthority_A3}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="text"
                            placeholder="Document Number"
                            name="DocumentNumber_A3"
                            className="form-control"
                            value={representative.DocumentNumber_A3}
                            onChange={(e) => handleInputChange(e)}
                          ></input>

                          <input
                            type="date"
                            placeholder="Expiration Date"
                            name="ExpirationDate_A3"
                            className="form-control"
                            value={representative.ExpirationDate_A3}
                            onChange={(e) => handleInputChange(e)}
                          ></input>
                        </div>
                      </div>
                      <div className="vr"></div>
                      <div className="col-md">
                        <h5 className="text-center">List B</h5>
                        <h6 className="text-center">Identity</h6>
                        <input
                          type="text"
                          placeholder="Document Title"
                          name="DocumentTitle_B"
                          className="form-control"
                          value={representative.DocumentTitle_B}
                          onChange={(e) => handleInputChange(e)}
                        ></input>

                        <input
                          type="text"
                          name="IssuingAuthority_B"
                          placeholder="Issuing Authority"
                          className="form-control"
                          value={representative.IssuingAuthority_B}
                          onChange={(e) => handleInputChange(e)}
                        ></input>

                        <input
                          type="text"
                          placeholder="Document Number"
                          name="DocumentNumber_B"
                          className="form-control"
                          value={representative.DocumentNumber_B}
                          onChange={(e) => handleInputChange(e)}
                        ></input>

                        <input
                          type="date"
                          placeholder="Expiration Date"
                          name="ExpirationDate_B"
                          className="form-control"
                          value={representative.ExpirationDate_B}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                        <div className="form-group">
                          <label htmlFor="comment">
                            Additional Information:
                          </label>
                          <textarea
                            className="form-control"
                            rows="5"
                            id="AdditionalInfo_B"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md">
                        <h5 className="text-center">List C</h5>
                        <h6 className="text-center">
                          Employment Authorization{" "}
                        </h6>
                        <input
                          type="text"
                          placeholder="Document Title"
                          name="DocumentTitle_C"
                          className="form-control"
                          value={representative.DocumentTitle_C}
                          onChange={(e) => handleInputChange(e)}
                        ></input>

                        <input
                          type="text"
                          placeholder="Issuing Authority"
                          name="IssuingAuthority_C"
                          className="form-control"
                          value={representative.IssuingAuthority_C}
                          onChange={(e) => handleInputChange(e)}
                        ></input>

                        <input
                          type="text"
                          placeholder="Document Number"
                          name="DocumentNumber_C"
                          className="form-control"
                          value={representative.DocumentNumber_C}
                          onChange={(e) => handleInputChange(e)}
                        ></input>

                        <input
                          type="date"
                          placeholder="Expiration Date"
                          name="ExpirationDate_C"
                          className="form-control"
                          value={representative.ExpirationDate_C}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                    </div>
                    <br />

                    <p className="paragraphs">
                      <b>
                        Certification: I attest, under penalty of perjury, that
                        (1) I have examined the document(s) presented by the
                        above-named employee, (2) the above-listed document(s)
                        appear to be genuine and to relate to the employee
                        named, and (3) to the best of my knowledge the employee
                        is authorized to work in the United States.
                      </b>
                    </p>
                    <div className="row">
                      <div className="col">
                        The employee's first day of employment{" "}
                      </div>
                      <div className="col-sm-3 left">
                        <input type="date" className="form-control"></input>
                      </div>
                      <div className="col">
                        <a href={i9Instructions} target="_blank">
                          (See instructions)
                        </a>
                        &nbsp;for exemptions:
                      </div>
                    </div>

                    <br />
                    <div className="row g-3">
                      <div className="col-md-5">
                        <input
                          type="text"
                          placeholder="Representative Signature"
                          name="RepresentativeSignature"
                          className="form-control"
                          value={representative.RepresentativeSignature}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-3">
                        <input
                          type="date"
                          placeholder="Representative Sign Date"
                          name="RepresentativeSignDate"
                          className="form-control"
                          value={representative.RepresentativeSignDate}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          placeholder="Representative Title"
                          name="RepresentativeTitle"
                          className="form-control"
                          value={representative.RepresentativeTitle}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Representative First Name"
                          name="RepresentativeFirstName"
                          className="form-control"
                          value={representative.RepresentativeFirstName}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Representative Last Name"
                          name="RepresentativeLastName"
                          className="form-control"
                          value={representative.RepresentativeLastName}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          placeholder="Organization Name"
                          name="OrganizationName"
                          className="form-control"
                          value={representative.OrganizationName}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          placeholder="Organization Address"
                          name="OrganizationAddress"
                          className="form-control"
                          value={representative.OrganizationAddress}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="City"
                          name="OrganizationCity"
                          className="form-control"
                          value={representative.OrganizationCity}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-2">
                        <input
                          type="text"
                          placeholder="State"
                          name="OrganizationState"
                          className="form-control"
                          value={representative.OrganizationState}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          placeholder="Zipcode"
                          name="OrganizationZipCode"
                          className="form-control"
                          value={representative.OrganizationZipCode}
                          onChange={(e) => handleInputChange(e)}
                        ></input>
                      </div>
                    </div>
                    <br />
                    {/* ////////////// */}
                    <div className="row">
                      <div className="col offset-md-3">
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
                                Are you sure you want to cancel? This will
                                result in your data not being submitted or
                                saved.
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>

                                <Link
                                  to="/reviewer"
                                  className="btn btn-success"
                                >
                                  Continue
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ////////////////////// */}

                      <div className="col offset-md">
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
                                Are you sure you are done reviewing this I-9
                                Form? IF you are, click SUBMIT
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
                                  onClick={(e) => saveOrUpdateRepresentative(e)}
                                  data-bs-dismiss="modal"
                                >
                                  Submit
                                </button>
                                <Link 
                                to="/Reviewer"
                                className="btn btn-success"
                                >Continue Testing</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ////////////////////////////////////////////// */}

                      {/*  */}
                    </div>

                    {/* ///////////////////////// */}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
};

export default AddRepresentativeComponent;
