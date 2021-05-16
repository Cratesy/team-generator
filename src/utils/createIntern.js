const Intern = require("../../lib/Intern");
const employeeQuestions = require("./employeeQuestions");
const getAnswers = require("./getAnswers");

const createIntern = async () => {
  const questions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "What school does the intern attend?",
      name: "school",
    },
  ];

  const answers = await getAnswers(questions);

  const intern = new Intern(answers);

  return intern;
};

module.exports = createIntern;
