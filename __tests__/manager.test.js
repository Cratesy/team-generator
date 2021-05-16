const Manager = require("../lib/Manager");

describe("Manager", () => {
  const mockAnswers = {
    name: "mike",
    id: 31,
    email: "mike31@hotmail.com",
    officeNumber: 01212043035,
    github: "https://github.com/Mike",
    role: "Manager",
  };

  test("should be a new instance of Manager ", () => {
    const manager = new Manager();

    expect(manager).toBeInstanceOf(Manager);
  });
  test("should construct new instant object of manager with name, id, email, office number and role", () => {
    const manager = new Manager(mockAnswers);

    expect(manager).toEqual({
      name: "mike",
      id: 31,
      email: "mike31@hotmail.com",
      officeNumber: 01212043035,
      github: "https://github.com/Mike",
      role: "Manager",
    });
  });
});

describe("tests for get methods", () => {
  test("should return office number when getOfficeNumber is called", () => {
    const manager = new Manager(mockAnswers);

    expect(manager.officeNumber).toEqual(01212043035);
  });

  test("should return role when getRole is called", () => {
    const manager = new Manager(mockAnswers);

    expect(manager.role).toEqual("Manager");
  });
});
