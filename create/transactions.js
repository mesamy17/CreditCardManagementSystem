class transaction {
  constructor(transactionId, cardId, merchant, amt, transactionDate) {
    this.transactionId = transactionId;
    this.cardId = cardId;
    this.merchantName = merchant;
    this.transactionAmt = amt;
    this.transactionDate = transactionDate;
  }
}

module.exports = transaction;
