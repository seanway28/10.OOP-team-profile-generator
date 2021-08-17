const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super (name, id, email) 
            this.id = 3;
        this.github = 'github';
    }
    
// Github username
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
