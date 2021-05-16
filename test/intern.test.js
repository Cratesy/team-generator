const Intern = require("../lib/Intern");

describe("Intern", () => {
  const mockAnswers = {
    name: "mike",
    id: 31,
    email: "mike31@hotmail.com",
    school: "kingCross",
    role: "Intern",
  };

  test("should be a new instance of Intern ", () => {
    const intern = new Intern(mockAnswers);

    expect(intern).toBeInstanceOf(Intern);
  });
  test("should construct new instant object of Intern with name, id, email, school and role", () => {
    const intern = new Intern(mockAnswers);

    expect(intern).toEqual({
      name: "mike",
      id: 31,
      email: "mike31@hotmail.com",
      school: "kingCross",
      role: "Intern",
    });
  });

  describe("tests for get methods", () => {
    test("should return name when getSchool is called", () => {
      const intern = new Intern(mockAnswers);

      const result = intern.getSchool();

      expect(result).toEqual(mockAnswers.school);
    });

    test("should return role when getRole is called", () => {
      const intern = new Intern(mockAnswers);

      const result = intern.getRole();

      expect(result).toEqual(mockAnswers.role);
    });
  });
});
