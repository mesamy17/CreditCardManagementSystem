const write = require("./writeCardData.js");

function updateCard(card) {
  try {
    write.writeCard("./data/cards" + card.cardId + ".json", card);
  } catch (error) {
    console.log("unable to update card");
  }
}

module.exports = updateCard;
