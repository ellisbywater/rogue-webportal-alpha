const { default: Moralis } = require("moralis/types");

class Investment extends Moralis.Object {
  constructor(sender, reciever, amount, token_address, txhash) {
    super();
    this.sender = sender;
    this.reciever = reciever;
    this.txhash = txhash;
    this.amount = amount;
    this.token_address = token_address;
    this.executionDate;
  }
}

class Reserve extends Moralis.Object {
  constructor(address, chainId, description) {
    super();
    this.address = address;
    this.chainId = chainId;
    this.description = description;
    this.tvl = 0.0;
    this.members = [];
  }

  addMember(address) {
    this.members.push(address);
  }
}

class ReserveMember extends Moralis.Object {
  constructor(member_address, investment) {
    this.member = member_address;
    this.initial_investment = investment;
    this.portionOwned;
  }
}
