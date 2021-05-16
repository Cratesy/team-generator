const Manager = require("../../lib/Manager");
const employeeQuestions = require("./employeeQuestions");
const getAnswers = require("./getAnswers");

const createManager = async () => {
  const questions = [
    ...employeeQuestions,
    {
      type: "number",
      message: "What is the managers office number?",
      name: "officeNumber",
    },
  ];

  const answers = await getAnswers(questions);

  const manager = new Manager(answers);

  return manager;
};

module.exports = createManager;
