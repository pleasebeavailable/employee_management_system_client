import axios from 'axios';
import Employee from '../model/employee';

const GET_EMPLOYEES_URL = '/employee/getAll';
const GET_EMPLOYEE_URL = '/employee/get/';
const ADD_EMPLOYEE_URL = '/employee/add';
const EDIT_EMPLOYEE_URL = '/employee/edit';
const DELETE_EMPLOYEE_URL = '/employee/delete/';

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
};

export async function getEmployees() {
    const response = await axios.get(GET_EMPLOYEES_URL, config);
    return response.data;
}

export async function getEmployee(id: string) {
    const response = await axios.get(GET_EMPLOYEE_URL + id, config);
    return response.data;
}

export async function addEmployee(employee: Employee) {
    const response = await axios.post(ADD_EMPLOYEE_URL, employee, config);
    return response.data;
}

export async function editEmployee(employee: Employee) {
    console.log(employee);
    const response = await axios.put(EDIT_EMPLOYEE_URL, employee, config);
    return response.data;
}

export async function deleteEmployee(id: string) {
    const response = await axios.delete(DELETE_EMPLOYEE_URL + id, config);
    return response.data;
}
