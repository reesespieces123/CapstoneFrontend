import axios from "axios";


const REPRESENTATIVE_BASE_REST_API_URL =
  "http://localhost:8080/api/v1/representative";

class RepresentativeService {
  getAllRepresentatives() {
    return axios.get(REPRESENTATIVE_BASE_REST_API_URL);
  }

  createRepresentative(representative) {
    return axios.post(REPRESENTATIVE_BASE_REST_API_URL, representative);
  }

  getRepresentativeById(representativeId) {
    return axios.get(REPRESENTATIVE_BASE_REST_API_URL + "/" + representativeId);
  }

  updateRepresentative(representativeId, representative) {
    return axios.put(
      REPRESENTATIVE_BASE_REST_API_URL + "/" + representativeId,
      representative
    );
  }

  deleterepresentative(representativeId) {
    return axios.delete(
      REPRESENTATIVE_BASE_REST_API_URL + "/" + representativeId
    );
  }
}

export default new RepresentativeService();
