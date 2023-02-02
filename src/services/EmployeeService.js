import axios from "axios";
import authHeader from "../services/auth-header";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/test";

// class EmployeeService {
  const getAllEmployees=()=> {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + "admin", { headers: authHeader() });
  }

  const createEmployee=(employee)=> {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
  }

  const getEmployeeById=(employeeId)=> {
    return axios.get(EMPLOYEE_BASE_REST_API_URL  + employeeId, {
      headers: authHeader()
    });
  }

  const updateEmployee=(employeeId, employee)=> {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId, employee)
  }

  const deleteEmployee=(employeeId)=> {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId)
  }
// }

export default {
  deleteEmployee,
  updateEmployee,
  createEmployee,
  getAllEmployees,
  getEmployeeById
};
//  new EmployeeService();
