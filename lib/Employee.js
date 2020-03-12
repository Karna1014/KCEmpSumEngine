 class Employee {
    constructor(name, Id, email) {
        this.name = name,
        this.Id = Id,
        this.email = email
    }

    getRole() {
        return 'Employee';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.Id;
    }

    getEmail() {
        return this.email;
    }

};

module.exports = Employee


    

        

