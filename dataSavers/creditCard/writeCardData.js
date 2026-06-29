const fs = require("fs");

function writeCard(fileName, fileData) {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 4));
  } catch (error) {
    console.log("Error Writting File");
  }
}

module.exports = writeCard;
