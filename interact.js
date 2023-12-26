const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed.binance.org/');

const contractAddress = "0x2701d94acc1b387c5ccaba569200284405fc1ab1";  // Thay thế bằng địa chỉ của hợp đồng thông minh của bạn

const abi = [
  // Thêm các định nghĩa của các hàm và sự kiện khác nếu cần
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  // Có thể cần thêm các phần tử ABI khác tùy thuộc vào các hàm bạn muốn gọi
];

const tokenContract = new web3.eth.Contract(abi, contractAddress);

async function interactWithContract() {
    // Lấy thông tin về tổng cung của token
    try {
        const totalSupply = await tokenContract.methods.totalSupply().call();
        console.log('Total Supply:', totalSupply);
    } catch (error) {
        console.error('Error:', error);
    }
}

interactWithContract();
