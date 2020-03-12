const Employee = require("./Employee");
const fs = require("fs");
class Manager extends Employee {
    constructor(name, Id, email, officeNumber) {
        super(name, Id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;