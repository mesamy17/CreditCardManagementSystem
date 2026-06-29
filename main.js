const create = require("./services/card/createCard");
const tran = require("./services/transaction/createTransaction");

create.createCard("Sam", 50000, "29June2026");
tran.createTransaction("CCN1001", "Amazon", 15000, "29June2026");
