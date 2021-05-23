const Employee = require("../lib/Employee");

describe("Employee", () => {
  const mockAnswers = {
    name: "mike",
    id: "31",
    email: "mike31@hotmail.com",
  };
  test("should be a new instance of Employee ", () => {
    const employee = new Employee(mockAnswers);

    expect(employee).toBeInstanceOf(Employee);
  });

  test("should construct new instant object of employee with name, id, email and role", () => {
    const employee = new Employee(mockAnswers);

    const expected = {
      name: "mike",
      id: "31",
      email: "mike31@hotmail.com",
    };

    expect(employee).toEqual(expected);
  });

  describe("tests for get methods", () => {
    test("should return name when getName is called", () => {
      const employee = new Employee(mockAnswers);

      expect(employee.name).toEqual("mike");
    });

    test("should return id when getId is called", () => {
      const employee = new Employee(mockAnswers);

      expect(employee.id).toEqual("31");
    });

    test("should return email when getEmail is called", () => {
      const employee = new Employee(mockAnswers);

      expect(employee.email).toEqual("mike31@hotmail.com");
    });
  });
});
