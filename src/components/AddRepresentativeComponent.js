import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RepresentativeService from "../services/RepresentativeService";
import i9Instructions from "../components/i9Instructions.pdf";

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
          history.push("/representative");
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
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">I-9 Section 2</h2>;
    }
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
          
          <div className="container">
            
            <div className="row">
              <br />
              <br />
              {/* "card col-md-6 offset-md-3 offset-md-3"  */}
              <div className="card col-lg-12">
                {title()}
                <div className="container">
                  <br />
                  <p className="paragraphs">
                    <b>
                      Employer or Authorized Representative Review and
                      Verification (Employers or their authorized representative
                      must complete and sign Section 2 within 3 business days of
                      the employee's first day of employment. You must
                      physically examine one document from List A OR a
                      combination of one document from List B and one document
                      from List C as listed on the{" "}
                      <a href={i9Instructions} target="_blank">
                        {" "}
                        List of Acceptable Documents.
                      </a>
                      )
                    </b>
                  </p>

                  {/* FORM STARTS HERE */}
                  <div className="container">
                    {/* START OF DIV ROW */}

                    {/* FIRST COL */}
                    <div className="row">
                      <div className="col-md">
                        <h5 className="text-center">List A</h5>
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
                    <p className="paragraphs">
                      The employee's first day of employment{" "}
                      <a href={i9Instructions} target="_blank">
                        {" "}
                        (See instructions)
                      </a>
                      for exemptions:{" "}
                    </p>
                    <div className="col-md-3">
                      <input type="date" className="form-control"></input>
                    </div>
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
                    <div className="row">
                      <div className="col-sm">
                        <button
                          className="btn btn-success"
                          onClick={(e) => saveOrUpdateRepresentative(e)}
                        >
                          Submit
                        </button>
                      </div>
                      <br />
                      <br />
                    </div>
                    <div className="col-sm">
                      <Link to="/Register" className="btn btn-danger">
                        Cancel
                      </Link>
                    </div>
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
