import { Applicant } from "@/moralis/models/RogueUser";

export default async (req, res) => {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      phone,
      alreadyCrypto,
      referral,
      message,
    } = req.body;
    const applicant = new Applicant(
      firstName,
      lastName,
      email,
      phone,
      alreadyCrypto,
      referral,
      message
    );
    applicant.save().then(
      (applicant) => {
        alert("New applicant" + applicant.id);
        res.status();
      },
      (error) => {
        res.status(error.message);
      }
    );
  }
};
