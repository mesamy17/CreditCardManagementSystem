const fs = require("fs");

function writeTransaction(fileName, fileData) {
  try {
    fs.writeFileSync(fileName, JSON.stringify(fileData, null, 4));
  } catch (error) {
    console.log("Error Writting File");
  }
}

module.exports = { writeTransaction };
