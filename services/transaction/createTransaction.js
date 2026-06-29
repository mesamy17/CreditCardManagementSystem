const getCard = require("../../dataFetchers/readFile.js");
const edit = require("../../dataSavers/creditCard/updateCard.js");
const transactions = require("../../create/transactions.js");
const idGen = require("../../generators/transactionId.js");
const write = require("../../dataSavers/transactions/writeTransaction.js");
const transaction = require("../../create/transactions.js");

function createTransaction(cardId, merchantName, amount, createDate) {
  try {
    let card = getCard.readFile("./data/cards/" + cardId + ".json");

    let status = "";
    let failReason = "";

    if (card.status == "BLOCKED") {
      status = "FAILED";
      failReason = "Card is Blocked";
    } else if (amount > card.availableCredit) {
      status = "FAILED";
      failReason = "Credit Limit Exceded";
    } else {
      status = "SUCCESS";
      card.currentOutstandingAmt = card.currentOutstandingAmt + amount;
      card.availableCredit = card.availableCredit - amount;
      edit.updateCard(card);
    }

    let data = new transaction(
      idGen.generateTransactionId(),
      cardId,
      merchantName,
      amount,
      createDate,
      status,
      failReason,
    );

    write.writeTransaction(
      "./data/transactions/" + data.transactionId + ".json",
      data,
    );

    console.log("Transaction Saved Successfully");
  } catch (error) {
    console.log("Transaction Failed");
  }
}

module.exports = { createTransaction };
