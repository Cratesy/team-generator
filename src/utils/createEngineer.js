const Engineer = require("../../lib/Engineer");
const employeeQuestions = require("./employeeQuestions");
const getAnswers = require("./getAnswers");

const createEngineer = async () => {
  const questions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "Please provide the engineers GitHub username.",
      name: "github",
    },
  ];

  const answers = await getAnswers(questions);

  const engineer = new Engineer(answers);

  return engineer;
};

module.exports = createEngineer;
