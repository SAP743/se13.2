const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed.binance.org/');  // Sử dụng BSC RPC endpoint

const contractAddress = 100;  // Thay thế bằng địa chỉ triển khai của hợp đồng
const abi = [10,20,30];  // Thay thế bằng ABI của hợp đồng

const tokenContract = new web3.eth.Contract(abi, contractAddress);

async function interactWithContract() {
    // Thực hiện các hoạt động tương tác với hợp đồng ở đây
    // Ví dụ: Lấy thông tin về tổng cung của token
    const totalSupply = await tokenContract.methods.totalSupply().call();
    console.log('Total Supply:', totalSupply);
}

interactWithContract();
