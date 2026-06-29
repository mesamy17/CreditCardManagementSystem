const fs = require("fs");

function generateTrandactionId() {
  let files = fs.readdirSync("./data/transactions");

  let num = files.length + 1;

  return "TSN" + num;
}

module.exports = generateTrandactionId;
