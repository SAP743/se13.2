const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = "brother celery appear tomato panic ceiling dish yellow monitor bulb slide setup";
const apiKey = "KHIEM_SOME_STABS_REAL";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, "https://bsc-dataseed.binance.org/", 0, 10),
      network_id: 56,
      gas: 2000000,
      gasPrice: 5000000000,
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://data-seed-prebsc-1-s1.binance.org:8545/", 0, 10),
      network_id: 97,
      gas: 2000000,
      gasPrice: 5000000000,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
  api_keys: {
    etherscan: apiKey,
  },
};