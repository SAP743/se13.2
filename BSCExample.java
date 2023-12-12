import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.request.EthBlockNumber;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.http.HttpService;
import java.io.IOException;
import java.math.BigInteger;

public class BSCExample {
    public static void main(String[] args) {
        // Kết nối đến mạng BSC
        Web3j web3j = Web3j.build(new HttpService("https://bsc-dataseed1.binance.org:443"));

        try {
            // Lấy số khối hiện tại
            EthBlockNumber blockNumber = web3j.ethBlockNumber().send();
            BigInteger latestBlock = blockNumber.getBlockNumber();

            // Lấy thông tin khối mới nhất
            EthBlock ethBlock = web3j.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, true).send();
            EthBlock.Block block = ethBlock.getBlock();

            // In thông tin khối mới nhất
            System.out.println("Latest Block Number: " + latestBlock);
            System.out.println("Latest Block Hash: " + block.getHash());
            System.out.println("Latest Block Timestamp: " + block.getTimestamp());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
