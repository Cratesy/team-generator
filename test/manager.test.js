const Manager = require("../lib/Manager");

describe("Manager", () => {
  test("should be a new instance of Manager ", () => {
    const manager = new Manager();

    expect(manager).toBeInstanceOf(Manager);
  });
  test("should construct new instant object of manager with name, id, email, office number and role", () => {
    const manager = new Manager("mike", 31, "mike31@hotmail.com");

    expect(manager).toEqual({
      name: "mike",
      id: 31,
      email: "mike31@hotmail.com",
      officeNumber: 01212043035,
      role: "Manager",
    });
  });
});

describe("tests for get", () => {
  test("should return name when getName is called", () => {
    const manager = new Manager("mike", 31, "mike31@hotmail.com", 01212043035);

    expect(manager.getOfficeNumber().toEqual(01212043035));
  });

  test("should return role when getRole is called", () => {
    const manager = new Manager("mike", 31, "mike31@hotmail.com", 01212043035);

    expect(manager.getRole().toEqual("Manager"));
  });
});
