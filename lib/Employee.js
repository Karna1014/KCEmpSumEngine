 class Employee {
     constructor(name, Id, email) {
        this.name = name,
        this.Id = Id,
        this.email = email
     }

    get name() {
        // if(typeof newEmpName === 'string' && newEmpName.length > 0) {
        //     this.name = newEmpName;
            return this.name;
        // } else {
        //     return 'Please enter an Employee Name.'
        }
    get Id() {
        return this.Id;
    }

    get email() {
        return this.email;
    }

    get Role() {
        return 'Employee';
    }

};

module.exports = Employee


    

        

