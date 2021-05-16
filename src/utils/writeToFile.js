const fs = require("fs");

const writeToFile = (html) => {
  try {
    fs.writeFileSync("team.html", html);
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;
