const getCard = require("../../dataFetchers/readFile.js");
const edit = require("../../dataSavers/creditCard/updateCard.js");
const transactions = require("../../create/transactions.js");
const idGen = require("../../generators/transactionId.js");
const write = require("../../dataSavers/transactions/writeTransaction.js");

function createTransaction(cardId, merchantName, amount, createDate) {
  try {
    let card = getCard.readFile(cardId);

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

    let transaction = new transactions(
      idGen.generateTransactionId(),
      cardId,
      merchantName,
      amount,
      status,
      failureReason,
    );

    write.writeTransaction(
      "./data/transactions/" + transaction.transactionId + ".json",
      transaction,
    );

    console.log("Transaction Saved Successfully");
  } catch (error) {
    console.log("Transaction Failed");
  }
}

module.exports = createTransaction;
