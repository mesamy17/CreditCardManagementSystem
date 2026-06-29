const fs = require("fs");

function readFile(fileName) {
  try {
    if (!fs.existsSync(fileName)) {
      return null;
    }
    let data = fs.readFileSync(fileName, "utf8");

    return data;
  } catch (error) {
    console.log("error readin file");
    return null;
  }
}

module.exports = readFile;
