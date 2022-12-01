import axios from "axios";
import Employee from "../model/employee";

const GET_EMPLOYEES_URL = "/employee/getAll"
const ADD_EMPLOYEE_URL = "/employee/add"
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

export async function getEmployees() {
  const response = await axios.get(GET_EMPLOYEES_URL, config);
  return response.data;
}

export async function addEmployee(employee: Employee) {
  const response = await axios.post(ADD_EMPLOYEE_URL, config);
  return response.data;
}

