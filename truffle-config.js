const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = "realkhiempai"; // Thay thế bằng mnemonic của bạn
const apiKey = "quangkhiem24"; // Thay thế bằng API key của bạn từ BSCScan

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, "https://bsc-dataseed.binance.org/", 0, 10),
      network_id: 56, // Mainnet
      gas: 2000000, // Đặt giới hạn gas nếu cần
      gasPrice: 5000000000, // Đặt giá gas nếu cần
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://data-seed-prebsc-1-s1.binance.org:8545/", 0, 10),
      network_id: 97, // Testnet
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
    etherscan: apiKey, // Sử dụng API key từ BSCScan để theo dõi trên Explorer
  },
};
