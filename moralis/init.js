import Moralis from "moralis/types";

const MoralisCredentials = {
  serverUrl: process.env.MORALIS_SERVER_URL,
  appId: process.env.MORALIS_APP_ID,
};

Moralis.start(MoralisCredentials);

export default Moralis;
