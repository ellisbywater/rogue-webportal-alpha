class Investment {
  constructor(sender, reciever, amount, token_address, txhash) {
    this.sender = sender;
    this.reciever = reciever;
    this.txhash = txhash;
    this.amount = amount;
    this.token_address = token_address;
  }
}
