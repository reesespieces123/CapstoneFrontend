import axios from "axios";
import authHeader from "../services/auth-header";

const REPRESENTATIVE_BASE_REST_API_URL =
  "http://localhost:8080/api/testrep";

// class RepresentativeService {
  const getAllRepresentative =()=> {
    return axios.get(
      REPRESENTATIVE_BASE_REST_API_URL + "/" + "representative" , { headers: authHeader() });
  }

  const createRepresentative=(representative)=> {
    return axios.post(REPRESENTATIVE_BASE_REST_API_URL, {
      headers: authHeader()
    });
  }

  const getRepresentativeById=(representativeId)=> {
    return axios.get(REPRESENTATIVE_BASE_REST_API_URL + "/" + "representative" ,{headers: authHeader(),
      });
  }

  const updateRepresentative=(representativeId, representative)=> {
    return axios.put(
      REPRESENTATIVE_BASE_REST_API_URL + "/" + "representativeId",
      "representative"
    );
  }

 const deleterepresentative=(representativeId)=> {
    return axios.delete(
      REPRESENTATIVE_BASE_REST_API_URL + "/" + "representativeId"
    );
  }
// }

export default {
  getAllRepresentative,
  deleterepresentative,
  createRepresentative,
  updateRepresentative,
  getRepresentativeById
};
// new RepresentativeService();
