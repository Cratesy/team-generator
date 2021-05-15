const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("should be a new instance of Engineer ", () => {
    const engineer = new Engineer();

    expect(engineer).toBeInstanceOf(Engineer);
  });
  test("should construct new instant object of engineer with name id, email, github account and role ", () => {
    const engineer = new Engineer(
      "mike",
      31,
      "mike31@hotmail.com",
      01212043035,
      "https://github.com/Mike"
    );

    expect(engineer).toEqual({
      name: "mike",
      id: 31,
      email: "mike31@hotmail.com",
      officeNumber: 01212043035,
      github: "https://github.com/Mike",
      role: "Engineer",
    });
  });
});

describe("tests for get", () => {
  test("should return office number when getOfficeNumber is called", () => {
    const engineer = new Engineer(
      "mike",
      31,
      "mike31@hotmail.com",
      01212043035,
      "https://github.com/Mike"
    );

    expect(engineer.getOfficeNumber().toEqual(01212043035));
  });

  test("should return role when getRole is called", () => {
    const engineer = new Engineer(
      "mike",
      31,
      "mike31@hotmail.com",
      01212043035,
      "https://github.com/Mike"
    );

    expect(engineer.getGithub().toEqual("https://github.com/Mike"));
  });

  test("should return role when getRole is called", () => {
    const engineer = new Engineer(
      "mike",
      31,
      "mike31@hotmail.com",
      01212043035,
      "https://github.com/Mike"
    );

    expect(engineer.getRole().toEqual("Engineer"));
  });
});
