const fs = require("fs");

function generateCardId() {
  let files = fs.readdirSync("./data/cards");

  let num = files.length + 1001;

  return "CCN" + num;
}

module.exports = {generateCardId};
