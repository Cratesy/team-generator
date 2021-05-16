const Employee = require("../lib/Employee");

describe("Employee", () => {
  const mockAnswers = {
    name: "mike",
    id: 31,
    email: "mike31@hotmail.com",
    role: "Employee",
  };
  test("should be a new instance of Employee ", () => {
    const employee = new Employee(mockAnswers);

    expect(employee).toBeInstanceOf(mockAnswers);
  });

  test("should construct new instant object of employee with name, id, email and role", () => {
    const employee = new Employee(mockAnswers);

    expect(employee).toEqual(mockAnswers);
  });

  describe("tests for get methods", () => {
    test("should return name when getName is called", () => {
      const employee = new Employee(mockAnswers);

      const result = employee.getName();

      expect(result).toEqual(mockAnswers.name);
    });

    test("should return id when getId is called", () => {
      const employee = new Employee(mockAnswers);

      const result = employee.getId();

      expect(result).toEqual(mockAnswers.id);
    });

    test("should return email when getEmail is called", () => {
      const employee = new Employee(mockAnswers);

      const result = employee.getEmail();

      expect(result).toEqual(mockAnswers.email);
    });

    test("should return role when getRole is called", () => {
      const employee = new Employee(mockAnswers);

      const result = employee.getRole();

      expect(result).toEqual(mockAnswers.role);
    });
  });
});
