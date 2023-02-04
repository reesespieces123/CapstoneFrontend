import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RepresentativeService from "../services/RepresentativeService";
import i9Instructions from "../components/i9Instructions.pdf";
import "../styles/I9Form.css";

const AddRepresentativeComponent = () => {
const [documenttitle_a1, setDocumenttitle_a1] = useState("");
const [issuingauthority_a1, setIssuingauthority_a1] = useState("");
const [documentnumber_a1, setDocumentnumber_a1] = useState("");
const [expirationdate_a1, setExpirationdate_a1] = useState("");
const [documenttitle_a2, setDocumenttitle_a2] = useState("");
const [issuingauthority_a2, setIssuingauthority_a2] = useState("");
const [documentnumber_a2, setDocumentnumber_a2] = useState("");
const [expirationdate_a2, setExpirationdate_a2] = useState("");
const [documenttitle_a3, setDocumenttitle_a3] = useState("");
const [issuingauthority_a3, setIssuingauthority_a3] = useState("");
const [documentnumber_a3, setDocumentnumber_a3] = useState("");
const [expirationdate_a3, setExpirationdate_a3] = useState("");
const [documenttitle_b, setDocumenttitle_b] = useState("");
const [issuingauthority_b, setIssuingauthority_b] = useState("");
const [documentnumber_b, setDocumentnumber_b] = useState("");
const [expirationdate_b, setExpirationdate_b] = useState("");
const [additionalinfo_b, setAdditionalinfo_b] = useState("");
const [documenttitle_c, setDocumenttitle_c] = useState("");
const [issuingauthority_c, setIssuingauthority_c] = useState("");
const [documentnumber_c, setDocumentnumber_c] = useState("");
const [expirationdate_c, setExpirationdate_c] = useState("");
const [representativesignature, setRepresentativesignature] = useState("");
const [representativesigndate, setRepresentativesigndate] = useState("");
const [representativetitle, setRepresentativetitle] = useState("");
const [representativefirstname, setRepresentativefirstname] = useState("");
const [representativelastname, setRepresentativelastname] = useState("");
const [organizationname, setOrganizationname] = useState("");
const [organizationaddress, setOrganizationaddress] = useState("");
const [organizationcity, setOrganizationcity] = useState("");
const [organizationstate, setOrganizationstate] = useState("");
const [organizationzipcode, setOrganizationzipcode] = useState("");

const navigate = useNavigate();
const { id } = useParams();

 const saveOrUpdateRepresentative = (e) => {
    e.preventDefault();
  
  const representative = {
    documenttitle_a1,
    issuingauthority_a1,
    documentnumber_a1,
    expirationdate_a1,
    documenttitle_a2,
    issuingauthority_a2,
    documentnumber_a2,
    expirationdate_a2,
    documenttitle_a3,
    issuingauthority_a3,
    documentnumber_a3,
    expirationdate_a3,
    documenttitle_b,
    issuingauthority_b,
    documentnumber_b,
    expirationdate_b,
    additionalinfo_b,
    documenttitle_c,
    issuingauthority_c,
    documentnumber_c,
    expirationdate_c,
    representativesignature,
    representativesigndate,
    representativetitle,
    representativefirstname,
    representativelastname,
    organizationname,
    organizationaddress,
    organizationcity,
    organizationstate,
    organizationzipcode, 
  };

  if (id) {
      RepresentativeService.updateRepresentative(id, representative)
        .then((response) => {
          navigate("/representative");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      RepresentativeService.createRepresentative(representative)
        .then((response) => {
           console.log(response.data);
          // history.push("/representative");

          navigate("/success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // });



  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (event.target.type === "radio") {
  //     setRepresentative({ ...representative, [name]: value });
  //   } else {
  //     setRepresentative({ ...representative, [name]: value });
  //   }
  // };
 
    
  useEffect(() => {
      RepresentativeService.getRepresentativeById(id)
        .then((response) => {
            setDocumenttitle_a1(response.data.documenttitle_a1);
            setIssuingauthority_a1(response.data.issuingauthority_a1);
            setDocumentnumber_a1(response.data.documentnumber_a1);
            setExpirationdate_a1(response.data.expirationdate_a1);
            setDocumenttitle_a2(response.data.document_title_a2);
            setIssuingauthority_a2(response.data.issuingauthority_a2);
            setDocumentnumber_a2(response.data.documentnumber_a2);
            setExpirationdate_a2(response.data.expirationdate_a2);
            setDocumenttitle_a3(response.data.documenttitle_a3);
            setIssuingauthority_a3(response.data.issuingauthority_a3);
            setDocumentnumber_a3(response.data.documentnumber_a3);
            setExpirationdate_a3(response.data.expirationdate_a3);
            setDocumenttitle_b(response.data.documenttitle_b);
            setIssuingauthority_b(response.data.issuingauthority_b);
            setDocumentnumber_b(response.data.documentnumber_b);
            setExpirationdate_b(response.data.expirationdate_b);
            setAdditionalinfo_b(response.data.additionalinfo_b);
            setDocumenttitle_c(response.data.documenttitle_c);
            setIssuingauthority_c(response.data.issuingauthority_c);
            setDocumentnumber_c(response.data.documentnumber_c);
            setExpirationdate_c(response.data.expirationdate_c);
            setRepresentativesignature(response.data.representativesignature);
            setRepresentativesigndate(response.data.representativesigndate);
            setRepresentativetitle(response.data.representativetitle);
            setRepresentativefirstname(response.data.representativefirstname);
            setRepresentativelastname(response.data.representativelastname);
            setOrganizationname(response.data.organizationname);
            setOrganizationaddress(response.data.organizationaddress);
            setOrganizationcity(response.data.organizationcity);
            setOrganizationstate(response.data.organizationstate);
            setOrganizationzipcode(response.data.organizationzipcode);
          })
       .catch((error) => {
          console.log(error);
        });
  }, []);
 
const title = () => {
    return (
      <>
        <h2 className="text-center">I-9 Section 2</h2>
      </>
    );
  };
  return (
    <>
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
                (Employers or their authorized representative must complete and
                sign Section 2 within 3 business days of the employee's first
                day of employment. You must physically examine one document from
                List A OR a combination of one document from List B and one
                document from List C as listed on the
                <a href={i9Instructions} target="_blank">
                  
                  List of Acceptable Documents.
                </a>
                )
              </b>
            </div>
            {/* FORM STARTS HERE */}
            <form className="container">
              {/* START OF DIV ROW */}
              {/* FIRST COL */}
              <div>
                
                <input
                  type="text"
                  placeholder="Document Title"
                  name="documenttitle_a1"
                  className="form-control"
                  value={documenttitle_a1}
                  onChange={(e) => setDocumenttitle_a1(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Issuing Authority"
                  name="issuingauthority_a1"
                  className="form-control"
                  value={issuingauthority_a1}
                  onChange={(e) => setIssuingauthority_a1(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Document Number"
                  name="documentnumber_a1"
                  className="form-control"
                  value={documentnumber_a1}
                  onChange={(e) => setDocumentnumber_a1(e.target.value)}
                ></input>
                <input
                  type="date"
                  placeholder="Expiration Date"
                  name="expirationdate_a1"
                  className="form-control"
                  value={expirationdate_a1}
                  onChange={(e) => setExpirationdate_a1(e.target.value)}
                ></input>
              </div>
              <br></br>
              <div>
                
                <input
                  type="text"
                  placeholder="Document Title"
                  name="documenttitle_a2"
                  className="form-control"
                  value={documenttitle_a2}
                  onChange={(e) => setDocumenttitle_a2(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Issuing Authority"
                  name="issuingauthority_a2"
                  className="form-control"
                  value={issuingauthority_a2}
                  onChange={(e) => setIssuingauthority_a2(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Document Number"
                  name="documentnumber_a2"
                  className="form-control"
                  value={documentnumber_a2}
                  onChange={(e) => setDocumentnumber_a2(e.target.value)}
                ></input>
                <input
                  type="date"
                  placeholder="Expiration Date"
                  name="expirationdate_a2"
                  className="form-control"
                  value={expirationdate_a2}
                  onChange={(e) => setDocumentnumber_a2(e.target.value)}
                ></input>
              </div>
              <br></br>
              <div>
               
                <input
                  type="text"
                  placeholder="Document Title"
                  name="documenttitle_a3"
                  className="form-control"
                  value={documenttitle_a3}
                  onChange={(e) => setDocumenttitle_a3(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Issuing Authority"
                  name="issuingauthority_a3"
                  className="form-control"
                  value={issuingauthority_a3}
                  onChange={(e) => setIssuingauthority_a3(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Document Number"
                  name="documentnumber_a3"
                  className="form-control"
                  value={documentnumber_a3}
                  onChange={(e) => setDocumentnumber_a3(e.target.value)}
                ></input>
                <input
                  type="date"
                  placeholder="Expiration Date"
                  name="expirationdate_a3"
                  className="form-control"
                  value={expirationdate_a3}
                  onChange={(e) => setExpirationdate_a3(e.target.value)}
                ></input>
              </div>
            </form>
            <div className="vr"></div>
            <div className="col-md">
             
              <h5 className="text-center">List B</h5>
              <input
                type="text"
                placeholder="Document Title"
                name="documenttitle_b"
                className="form-control"
                value={documenttitle_b}
                onChange={(e) => setDocumenttitle_b(e.target.value)}
              ></input>
              <input
                type="text"
                name="issuingauthority_b"
                placeholder="Issuing Authority"
                className="form-control"
                value={issuingauthority_b}
                onChange={(e) => setIssuingauthority_b(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Document Number"
                name="documentnumber_b"
                className="form-control"
                value={documentnumber_b}
                onChange={(e) => setDocumentnumber_b(e.target.value)}
              ></input>
              <input
                type="date"
                placeholder="Expiration Date"
                name="expirationdate_b"
                className="form-control"
                value={expirationdate_b}
                onChange={(e) => setExpirationdate_b(e.target.value)}
              ></input>
              <div className="form-group">
              
                <label htmlFor="comment">Additional Information:</label>{" "}
                <textarea
                  className="form-control"
                  rows="5"
                  id=" additionalinfo_b"
                ></textarea>
              </div>
            </div>
            <div className="col-md">
              
              <h5 className="text-center">List C</h5>
              <input
                type="text"
                placeholder="Document Title"
                name="documenttitle_c"
                className="form-control"
                value={documenttitle_c}
                onChange={(e) => setDocumenttitle_c(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Issuing Authority"
                name="issuingauthority_c"
                className="form-control"
                value={issuingauthority_c}
                onChange={(e) => setIssuingauthority_c(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Document Number"
                name="documentnumber_c"
                className="form-control"
                value={documentnumber_c}
                onChange={(e) => setDocumentnumber_c(e.target.value)}
              ></input>
              <input
                type="date"
                placeholder="Expiration Date"
                name="expirationdate_c"
                className="form-control"
                value={expirationdate_c}
                onChange={(e) => setExpirationdate_c(e.target.value)}
              ></input>
            </div>
          </div>
          <br />
          <p className="paragraphs">
            
            <b>
              
              Certification: I attest, under penalty of perjury, that (1) I have
              examined the document(s) presented by the above-named employee,
              (2) the above-listed document(s) appear to be genuine and to
              relate to the employee named, and (3) to the best of my knowledge
              the employee is authorized to work in the United States.
            </b>
          </p>
          <div className="paragraphs">
            
            The employee's first day of employment
            <a href={i9Instructions} target="_blank">
              
              (See instructions)
            </a>
            for exemptions:
            <div className="col-md-3">
              
              <input type="date" className="form-control"></input>
            </div>
          </div>
          <div className="row g-3">
            
            <div className="col-md-5">
              
              <input
                type="text"
                placeholder="Representative Signature"
                name="representativesignature"
                className="form-control"
                value={representativesignature}
                onChange={(e) => setRepresentativesignature(e.target.value)}
              ></input>
            </div>
            <div className="col-md-3">
              
              <input
                type="date"
                placeholder="Representative Sign Date"
                name="representativesigndate"
                className="form-control"
                value={representativesigndate}
                onChange={(e) => setRepresentativesigndate(e.target.value)}
              ></input>
            </div>
            <div className="col-md-4">
              
              <input
                type="text"
                placeholder="Representative Title"
                name="representativetitle"
                className="form-control"
                value={representativetitle}
                onChange={(e) => setRepresentativetitle(e.target.value)}
              ></input>
            </div>
            <div className="col-md-6">
              
              <input
                type="text"
                placeholder="Representative First Name"
                name="representativefirstname"
                className="form-control"
                value={representativefirstname}
                onChange={(e) => setRepresentativefirstname(e.target.value)}
              ></input>
            </div>
            <div className="col-md-6">
              
              <input
                type="text"
                placeholder="Representative Last Name"
                name="representativelastname"
                className="form-control"
                value={representativelastname}
                onChange={(e) => setRepresentativelastname(e.target.value)}
              ></input>
            </div>
            <div className="col-md-12">
              
              <input
                type="text"
                placeholder="Organization Name"
                name="organizationname"
                className="form-control"
                value={organizationname}
                onChange={(e) => setOrganizationname(e.target.value)}
              ></input>
            </div>
            <div className="col-md-12">
              
              <input
                type="text"
                placeholder="Organization Address"
                name="organizationaddress"
                className="form-control"
                value={organizationaddress}
                onChange={(e) => setOrganizationaddress(e.target.value)}
              ></input>
            </div>
            <div className="col-md-6">
              
              <input
                type="text"
                placeholder="City"
                name="organizationcity"
                className="form-control"
                value={organizationcity}
                onChange={(e) => setOrganizationcity(e.target.value)}
              ></input>
            </div>
            <div className="col-md-2">
              
              <input
                type="text"
                placeholder="State"
                name="organizationstate"
                className="form-control"
                value={organizationstate}
                onChange={(e) => setOrganizationstate(e.target.value)}
              ></input>
            </div>
            <div className="col-md-4">
              
              <input
                type="text"
                placeholder="Zipcode"
                name="organizationzipcode"
                className="form-control"
                value={organizationzipcode}
                onChange={(e) => setOrganizationzipcode(e.target.value)}
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
                tabIndex="-1"
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
                tabIndex="-1"
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
          </div>
          {/*  */}
          {/* ///////////////////////// */}
          <br />
        </div>
      </div>
    </>
  );
};


export default AddRepresentativeComponent;
