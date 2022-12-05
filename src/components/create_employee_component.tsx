import React, { useEffect } from 'react';
import { addEmployee, editEmployee, getEmployee } from '../service/employee_service';
import { useNavigate } from 'react-router';
import Employee from '../model/employee';
import { useParams } from 'react-router-dom';

export default function CreateEmployeeComponent() {
    const { id } = useParams();
    const [employee, setEmployee] = React.useState(new Employee('', '', '', ''));
    const navigate = useNavigate();

    useEffect(() => {
        if (id != null) {
            getEmployee(id).then((res) => setEmployee(new Employee(res.id, res.emailId, res.firstName, res.lastName)));
        }
    }, []);
    const saveEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id == null) {
            addEmployee(employee).then(() => goToHome());
        } else {
            editEmployee(employee).then(() => goToHome());
        }
        console.log(JSON.stringify(employee));
    };
    const goToHome = () => {
        navigate('/');
    };

    const handleFormChange = (event: React.ChangeEvent) => {
        const fieldName = (event.target as HTMLInputElement).name;
        const changedEmployee = { ...employee };
        // @ts-ignore
        changedEmployee[fieldName] = (event.target as HTMLInputElement).value;
        setEmployee(
            new Employee(
                changedEmployee.id,
                changedEmployee.emailId,
                changedEmployee.firstName,
                changedEmployee.lastName,
            ),
        );
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-1 offset-md-3">
                        <h3 className="text-center">Create Employee</h3>
                        <div className="card-body">
                            <form onSubmit={saveEmployee}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        placeholder="firstName"
                                        name="firstName"
                                        className="form-control"
                                        value={employee.firstName}
                                        onChange={(e: React.ChangeEvent) => handleFormChange(e)}
                                    />
                                    <label>Last Name</label>
                                    <input
                                        placeholder="lastName"
                                        name="lastName"
                                        className="form-control"
                                        value={employee.lastName}
                                        onChange={(e: React.ChangeEvent) => handleFormChange(e)}
                                    />
                                    <label>Email Id:</label>
                                    <input
                                        placeholder="emailId"
                                        name="emailId"
                                        className="form-control"
                                        value={employee.emailId}
                                        onChange={(e: React.ChangeEvent) => handleFormChange(e)}
                                    />
                                </div>
                                <button className="btn btn-success">Save</button>
                                <button className="btn btn-danger" onClick={() => goToHome()}>
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
