const Employee = require("./Employee");


class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email);
        this.school = school;
    }
};









module.exports = Intern;