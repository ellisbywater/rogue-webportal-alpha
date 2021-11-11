class Investment {
  constructor(description, sender, reciever, amount, token_address, txhash) {
    this.description = description;
    this.sender = sender;
    this.reciever = reciever;
    this.txhash = txhash;
    this.amount = amount;
    this.token_address = token_address;
  }
}
