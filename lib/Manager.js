const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email);
        this.officeNum = officeNum;
    }
    // Get office number
    getOfficeNumber() {
        return '<span>Office Number:</span> ${this.officeNumber}';
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
