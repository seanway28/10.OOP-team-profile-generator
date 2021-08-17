const Employee = require('../lin/Employee');
	
	class Intern extends Employee {
	    constructor (name, id, email) {
	        super (name, id, email);
			this.id = 4;
	        this.school = 'Butler';
	    }
	// Get School
		getSchool() {
	        return this.school;
	    }
	// Get Role / Returns 'intern'
		getRole() {
	        return 'Intern';
	    }
	}
	

	module.exports = Intern;



