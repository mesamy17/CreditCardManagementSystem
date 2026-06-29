const creditCard = require("../../create/CreditCard.js");
const idGen = require("../../generators/cardId.js");
const add = require("../../dataSavers/creditCard/writeCardData.js");

function createCard(cardHolderName, creditLimit, createDate) {
  try {
    let cardId = idGen.generateCardId();

    let card = new creditCard(cardId, cardHolderName, creditLimit, createDate);

    add.writeCard("./data/cards/" + cardId + ".json", card);

    console.log("card Created Successfully");
    console.log(card);
  } catch (error) {
    console.log("Unable to create card");
  }
}

module.exports = { createCard };
