const fs = require("fs");

function writeCard(fileName, fileData) {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 4));
    console.log("file Written Successfully");
  } catch (error) {
    console.log("Error Writting File");
  }
}

module.exports = writeCard;
