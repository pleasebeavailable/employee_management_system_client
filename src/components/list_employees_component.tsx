import React, {useEffect} from "react";
import {getEmployees} from "../service/employee_service";
import Employee from "../model/employee";

export default function ListEmployeesComponent() {
  const [employees, setEmployees] = React.useState([]);

  useEffect(() => {
    getEmployees().then(res => setEmployees(res)).catch(
        err => console.log(err.response.data));

  }, [setEmployees]);
  return (<div>
    <h2 className="text-center">Employees List</h2>
    <div className="row">
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>{employees.map((employee: Employee) =>
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <tr>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </tr>)}
        </tbody>
      </table>
    </div>
  </div>);
}
