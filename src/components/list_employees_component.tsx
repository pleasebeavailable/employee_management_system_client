import React, { useEffect } from 'react';
import { deleteEmployee, getEmployees } from '../service/employee_service';
import Employee from '../model/employee';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

export default function ListEmployeesComponent() {
    const [employees, setEmployees] = React.useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getEmployees()
            .then((res) => setEmployees(res))
            .catch((err) => console.log(err.response.data));
    }, [setEmployees]);

    const removeEmployee = (id: string) => {
        deleteEmployee(id).then(() =>
            getEmployees()
                .then((res) => setEmployees(res))
                .catch((err) => console.log(err.response.data)),
        );
    };

    const goToCreateEmployee = (id = '') => {
        navigate('/add-employee/' + id);
    };

    return (
        <div>
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
                    <tbody>
                        {employees.map((employee: Employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <div className="row ml-5 mr-1">
                                        <Button
                                            className="btn btn-primary col-4"
                                            onClick={() => goToCreateEmployee(employee.id)}
                                        >
                                            Edit
                                        </Button>
                                        <div className="col-2" />
                                        <Button
                                            className="btn btn-danger col-4"
                                            onClick={() => removeEmployee(employee.id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <Button className="btn btn-primary" onClick={() => goToCreateEmployee()}>
                    Add Employee
                </Button>
            </div>
        </div>
    );
}
