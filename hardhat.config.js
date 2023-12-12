require("@nomicfoundation/hardhat-toolbox");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const account = "f0df5d1c5329941985f15b3be26726cfb3cb0fbe18c818289f57aa84ae8d1586";

module.exports = {
  solidity: "0.8.19",
  networks: {
    fantom: {
      url: `https://endpoints.omniatech.io/v1/fantom/testnet/public`,
      accounts: [account]
    },
    ethereum: {
      url: ``,
      accounts: [account]
    }
  }
};