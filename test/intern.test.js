const Intern = require("../lib/Intern");

describe("Intern", () => {
  test("should be a new instance of Intern ", () => {
    const intern = new Intern();

    expect(intern).toBeInstanceOf(Intern);
  });
  test("should construct new instant object of Intern with name, id, email, school and role", () => {
    const intern = new Intern("mike", 31, "mike31@hotmail.com", "kingCross");

    expect(intern).toEqual({
      name: "mike",
      id: 31,
      email: "mike31@hotmail.com",
      school: "kingCross",
      role: "Intern",
    });
  });
});

describe("tests for get", () => {
  test("should return name when getSchool is called", () => {
    const intern = new Intern("mike", 31, "mike31@hotmail.com", "kingCross");

    expect(intern.getSchool().toEqual("kingCross"));
  });

  test("should return role when getRole is called", () => {
    const intern = new Intern("mike", 31, "mike31@hotmail.com", "kingCross");

    expect(intern.getRole().toEqual("Intern"));
  });
});
