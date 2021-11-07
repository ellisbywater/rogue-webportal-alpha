const { Moralis } = require("moralis/types");

export class Applicant extends Moralis.Object {
  constructor(
    firstName,
    lastName,
    emailAddr,
    phoneNumber,
    message,
    alreadyCrypto
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddr = emailAddr;
    this.phoneNumber = phoneNumber;
    this.message = message || "";
    this.alreadyCrypto = alreadyCrypto || false;
    this.date_submitted = Date.now();
  }
}

export class RogueUser extends Moralis.User {
  constructor(attributes) {
    super(attributes);
    this.firstName = "";
    this.lastName = "";
    this.phoneNumber = "";
    this.completedOnboard = false;
    this.onboardingStep = 0;
    this.termsAccepted = false;
    this.subscribedToNewsletter = false;
    this.emailVerified = false;
    this.pin = "";
    this.pinConfirmed = false;
  }

  fullname() {
    return this.firstName + " " + this.lastName;
  }

  set pin(params) {
    this.pin = params;
  }
  get pin() {
    return this.pin;
  }
}
