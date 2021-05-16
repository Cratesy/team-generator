const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const mockAnswers = {
    name: "mike",
    id: 31,
    email: "mike31@hotmail.com",
    officeNumber: 01212043035,
    github: "https://github.com/Mike",
    role: "Engineer",
  };
  test("should be a new instance of Engineer ", () => {
    const engineer = new Engineer(mockAnswers);

    expect(engineer).toBeInstanceOf(Engineer);
  });
  test("should construct new instant object of engineer with name id, email, github account and role ", () => {
    const engineer = new Engineer(mockAnswers);

    expect(engineer).toEqual({
      name: "mike",
      id: 31,
      email: "mike31@hotmail.com",
      officeNumber: 01212043035,
      github: "https://github.com/Mike",
      role: "Engineer",
    });
  });

  describe("tests for get methods", () => {
    test("should return office number when getOfficeNumber is called", () => {
      const engineer = new Engineer(mockAnswers);

      expect(engineer.officeNumber).toEqual(01212043035);
    });

    test("should return github when getGithub is called", () => {
      const engineer = new Engineer(mockAnswers);

      expect(engineer.github).toEqual("https://github.com/Mike");
    });

    test("should return role when getRole is called", () => {
      const engineer = new Engineer(mockAnswers);

      expect(engineer.role).toEqual("Engineer");
    });
  });
});
