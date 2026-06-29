class CreditCard {
  constructor(cardId, cardHolderName, creditLimit, createdDate) {
    this.cardId = cardId;
    this.cardHolderName = cardHolderName;
    this.creditLimit = creditLimit;
    this.createdDate = createdDate;
    this.currentOutstandingAmount = 0;
    this.availableCredit = creditLimit;
    this.status = "ACTIVE";
  }
}

module.exports = CreditCard;
