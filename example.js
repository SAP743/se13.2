// JavaScript example using Web3.js
const Web3 = require('web3');
const ABI = require('path/to/contractABI.json');

// Connect to Binance Smart Chain
const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

// Load contract
const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';
const contract = new web3.eth.Contract(ABI, contractAddress);

// Read contract state
contract.methods.message().call((error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Current message:', result);
    }
});

// Update contract state
const newMessage = 'Hello, BSC!';
const privateKey = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

contract.methods.updateMessage(newMessage).send(
    { from: account.address, gas: 200000 },
    (error, transactionHash) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Transaction hash:', transactionHash);
        }
    }
);
