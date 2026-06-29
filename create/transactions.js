class transaction {
  constructor(
    transactionId,
    cardId,
    merchant,
    amt,
    transactionDate,
    status,
    failureReason,
  ) {
    this.transactionId = transactionId;
    this.cardId = cardId;
    this.merchantName = merchant;
    this.transactionAmt = amt;
    this.transactionDate = transactionDate;
    this.transactionStatus = status;
    this.failureReason = failureReason;
  }
}

module.exports = transaction;
