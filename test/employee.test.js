const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("should be a new instance of Employee ", () => {
    const employee = new Employee();

    expect(employee).toBeInstanceOf(Employee);
  });
  test("should construct new instant object of employee with name id and email", () => {
    const employee = new Employee("mike", 31, "mike31@hotmail.com");

    expect(employee).toEqual({
      name: "mike",
      id: 31,
      email: "mike31@hotmail.com",
      role: "Employee",
    });
  });
});

describe("tests for get", () => {
  test("should return name when getName is called", () => {
    const employee = new Employee("mike", 31, "mike31@hotmail.com");

    expect(employee.getName().toEqual("mike"));
  });

  test("should return id when getId is called", () => {
    const employee = new Employee("mike", 31, "mike31@hotmail.com");

    expect(employee.getId().toEqual(31));
  });

  test("should return email when getEmail is called", () => {
    const employee = new Employee("mike", 31, "mike31@hotmail.com");

    expect(employee.getEmail().toEqual("mike31@hotmail.com"));
  });

  test("should return role when getRole is called", () => {
    const employee = new Employee("mike", 31, "mike31@hotmail.com");

    expect(employee.getRole().toEqual("Employee"));
  });
});
