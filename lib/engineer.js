const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ name, id, email, officeNumber, github }) {
    super(name, id, email);

    this.officeNumber = officeNumber;
    this.github = github;
    this.role = "Engineer";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
