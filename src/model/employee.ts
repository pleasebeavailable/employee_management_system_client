class Employee {
    id: string;
    emailId: string;
    firstName: string;
    lastName: string;
    constructor(id: string, emailId: string, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
}

export default Employee;
