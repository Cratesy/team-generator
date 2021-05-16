const generateHtml = require("./src/utils/generateHTML");
const writeToFile = require("./src/utils/writeToFile");
const getAnswers = require("./src/utils/getAnswers");
const allEmployees = require("./src/utils/allEmployees");

const init = async () => {
  console.log("app started");

  const teamQuestion = [
    {
      type: "input",
      message: "what is your team name?",
      name: "teamName",
    },
  ];
  const { teamName } = await getAnswers(teamQuestion);

  const employees = await allEmployees();

  const html = generateHtml({ teamName, employees });

  writeToFile(html);
};

init();
