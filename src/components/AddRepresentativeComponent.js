import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RepresentativeService from "../services/RepresentativeService";
import i9Instructions from "../components/i9Instructions.pdf";
const AddRepresentativeComponent = () => {
  const [representative, setRepresentative] = useState({
    documenttitlea1: "",
    issuingauthority_a1: "",
    documentnumber_a1: "",
    expirationdate_a1: "",
    document_title_a2: "",
    issuingauthority_a2: "",
    documentnumber_a2: "",
    expirationdate_a2: "",
    documenttitle_a3: "",
    issuingauthority_a3: "",
    documentnumber_a3: "",
    expirationdate_a3: "",
    documenttitle_b: "",
    issuingauthority_b: "",
    documentnumber_b: "",
    expirationdate_b: "",
    additionalinfo_b: "",
    documenttitle_c: "",
    issuingauthority_c: "",
    documentnumber_c: "",
    expirationdate_c: "",
    representativesignature: "",
    representativesigndate: "",
    representativetitle: "",
    representativefirstname: "",
    representativelastname: "",
    organizationname: "",
    organizationaddress: "",
    organizationcity: "",
    organizationstate: "",
    organizationzipcode: "",
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
            document_titlea1: response.data.document_titlea1,
            issuingauthority_a1: response.data.issuingauthority_a1,
            documentnumber_a1: response.data.documentnumber_a1,
            expirationdate_a1: response.data.expirationdate_a1,
            document_title_a2: response.data.document_title_a2,
            issuingauthority_a2: response.data.issuingauthority_a2,
            documentnumber_a2: response.data.documentnumber_a2,
            expirationdate_a2: response.data.expirationdate_a2,
            documenttitle_a3: response.data.documenttitle_a3,
            issuingauthority_a3: response.data.issuingauthority_a3,
            documentnumber_a3: response.data.documentnumber_a3,
            expirationdate_a3: response.data.expirationdate_a3,
            documenttitle_b: response.data.documenttitle_b,
            issuingauthority_b: response.data.issuingauthority_b,
            documentnumber_b: response.data.documentnumber_b,
            expirationdate_b: response.data.expirationdate_b,
            additionalinfo_b: response.data.additionalinfo_b,
            documenttitle_c: response.data.documenttitle_c,
            issuingauthority_c: response.data.issuingauthority_c,
            documentnumber_c: response.data.documentnumber_c,
            expirationdate_c: response.data.expirationdate_c,
            representativesignature: response.data.representativesignature,
            representativesigndate: response.data.representativesigndate,
            representativetitle: response.data.representativetitle,
            representativefirstname: response.data.representativefirstname,
            representativelastname: response.data.representativelastname,
            organizationname: response.data.organizationname,
            organizationaddress: response.data.organizationaddress,
            organizationcity: response.data.organizationcity,
            organizationstate: response.data.organizationstate,
            organizationzipcode: response.data.organizationzipcode,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  const title = () => {
    if (id) {
    } else {
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
          <div className="row">
            <br />
            <br />
            {/* "card col-md-6 offset-md-3 offset-md-3"  */}
            <div className="card col-lg-12">
              {title()}
              <div className="container">
                <b>
                  Employer or Authorized Representative Review and Verification
                  (Employers or their authorized representative must complete
                  and sign Section 2 within 3 business days of the employee's
                  first day of employment. You must physically examine one
                  document from List A OR a combination of one document from
                  List B and one document from List C as listed on the{" "}
                  <a href={i9Instructions} target="_blank">
                    {" "}
                    List of Acceptable Documents.
                  </a>{" "}
                  )
                </b>{" "}
              </div>
              {/* FORM STARTS HERE */}
              {/* START OF DIV ROW */}
              {/* FIRST COL */}
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Document Title"
                  name="document_title_a1"
                  className="form-control"
                  value={representative.document_title_a1}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="text"
                  placeholder="Issuing Authority"
                  name="issuingauthority_a1"
                  className="form-control"
                  value={representative.issuingauthority_a1}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="text"
                  placeholder="Document Number"
                  name="documentnumber_a1"
                  className="form-control"
                  value={representative.documentnumber_a1}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="date"
                  placeholder="Expiration Date"
                  name="expirationdate_a1"
                  className="form-control"
                  value={representative.expirationdate_a1}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
              </div>{" "}
              <br></br>{" "}
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Document Title"
                  name="document_title_a2"
                  className="form-control"
                  value={representative.document_title_a2}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="text"
                  placeholder="Issuing Authority"
                  name="issuingauthority_a2"
                  className="form-control"
                  value={representative.issuingauthority_a2}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="text"
                  placeholder="Document Number"
                  name="documentnumber_a2"
                  className="form-control"
                  value={representative.documentnumber_a2}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="date"
                  placeholder="Expiration Date"
                  name="expirationdate_a2"
                  className="form-control"
                  value={representative.expirationdate_a2}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
              </div>{" "}
              <br></br>{" "}
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Document Title"
                  name="documenttitle_a3"
                  className="form-control"
                  value={representative.documenttitle_a3}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="text"
                  placeholder="Issuing Authority"
                  name="issuingauthority_a3"
                  className="form-control"
                  value={representative.issuingauthority_a3}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="text"
                  placeholder="Document Number"
                  name="documentnumber_a3"
                  className="form-control"
                  value={representative.documentnumber_a3}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <input
                  type="date"
                  placeholder="Expiration Date"
                  name="expirationdate_a3"
                  className="form-control"
                  value={representative.expirationdate_a3}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
              </div>{" "}
            </div>{" "}
            <div className="vr"></div>{" "}
            <div className="col-md">
              {" "}
              <h5 className="text-center">List B</h5>{" "}
              <input
                type="text"
                placeholder="Document Title"
                name="documenttitle_b"
                className="form-control"
                value={representative.documenttitle_b}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
              <input
                type="text"
                name="issuingauthority_b"
                placeholder="Issuing Authority"
                className="form-control"
                value={representative.issuingauthority_b}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
              <input
                type="text"
                placeholder="Document Number"
                name="documentnumber_b"
                className="form-control"
                value={representative.documentnumber_b}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
              <input
                type="date"
                placeholder="Expiration Date"
                name="expirationdate_b"
                className="form-control"
                value={representative.expirationdate_b}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
              <div className="form-group">
                {" "}
                <label for="comment">Additional Information:</label>{" "}
                <textarea
                  className="form-control"
                  rows="5"
                  id=" additionalinfo_b"
                ></textarea>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md">
              {" "}
              <h5 className="text-center">List C</h5>{" "}
              <input
                type="text"
                placeholder="Document Title"
                name="documenttitle_c"
                className="form-control"
                value={representative.documenttitle_c}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
              <input
                type="text"
                placeholder="Issuing Authority"
                name="issuingauthority_c"
                className="form-control"
                value={representative.issuingauthority_c}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
              <input
                type="text"
                placeholder="Document Number"
                name="documentnumber_c"
                className="form-control"
                value={representative.documentnumber_c}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
              <input
                type="date"
                placeholder="Expiration Date"
                name="expirationdate_c"
                className="form-control"
                value={representative.expirationdate_c}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
          </div>{" "}
          <br />{" "}
          <p className="paragraphs">
            {" "}
            <b>
              {" "}
              Certification: I attest, under penalty of perjury, that (1) I have
              examined the document(s) presented by the above-named employee,
              (2) the above-listed document(s) appear to be genuine and to
              relate to the employee named, and (3) to the best of my knowledge
              the employee is authorized to work in the United States.
            </b>{" "}
          </p>{" "}
          <p className="paragraphs">
            {" "}
            The employee's first day of employment{" "}
            <a href={i9Instructions} target="_blank">
              {" "}
              (See instructions)
            </a>{" "}
            for exemptions:{" "}
            <div className="col-md-3">
              {" "}
              <input type="date" className="form-control"></input>{" "}
            </div>{" "}
          </p>{" "}
          <div className="row g-3">
            {" "}
            <div className="col-md-5">
              {" "}
              <input
                type="text"
                placeholder="Representative Signature"
                name="representativesignature"
                className="form-control"
                value={representative.representativesignature}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-3">
              {" "}
              <input
                type="date"
                placeholder="Representative Sign Date"
                name="representativesigndate"
                className="form-control"
                value={representative.representativesigndate}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-4">
              {" "}
              <input
                type="text"
                placeholder="Representative Title"
                name="representativetitle"
                className="form-control"
                value={representative.representativetitle}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <input
                type="text"
                placeholder="Representative First Name"
                name="representativefirstname"
                className="form-control"
                value={representative.representativefirstname}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <input
                type="text"
                placeholder="Representative Last Name"
                name="representativelastname"
                className="form-control"
                value={representative.representativelastname}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-12">
              {" "}
              <input
                type="text"
                placeholder="Organization Name"
                name="organizationname"
                className="form-control"
                value={representative.organizationname}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-12">
              {" "}
              <input
                type="text"
                placeholder="Organization Address"
                name="organizationaddress"
                className="form-control"
                value={representative.organizationaddress}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <input
                type="text"
                placeholder="City"
                name="organizationcity"
                className="form-control"
                value={representative.organizationcity}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-2">
              {" "}
              <input
                type="text"
                placeholder="State"
                name="organizationstate"
                className="form-control"
                value={representative.organizationstate}
                onChange={(e) => handleInputChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="col-md-4">
              {" "}
              <input
                type="text"
                placeholder="Zipcode"
                name="organizationzipcode"
                className="form-control"
                value={representative.organizationzipcode}
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
                      Are you sure you want to cancel? This will result in your
                      data not being submitted or saved.
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>

                      <Link to="/reviewer" className="btn btn-success">
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
                      <h5 className="modal-title" id="staticBackdropLabel">
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
                      Are you sure you are done reviewing this I-9 Form? If you
                      are submit this form
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
    </form>
  );
};
<br />;

export default AddRepresentativeComponent;
