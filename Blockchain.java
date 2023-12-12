import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Blockchain {
    public static void main(String[] args) {
        Block block1 = new Block("Block 1", "0");
        System.out.println("Block 1 Hash: " + block1.getHash());

        Block block2 = new Block("Block 2", block1.getHash());
        System.out.println("Block 2 Hash: " + block2.getHash());
    }
}

class Block {
    private String data;
    private String previousHash;
    private String hash;

    public Block(String data, String previousHash) {
        this.data = data;
        this.previousHash = previousHash;
        this.hash = calculateHash();
    }

    public String getHash() {
        return hash;
    }

    private String calculateHash() {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            String input = data + previousHash;
            byte[] hashBytes = digest.digest(input.getBytes());

            StringBuilder hexString = new StringBuilder();
            for (byte hashByte : hashBytes) {
                String hex = Integer.toHexString(0xff & hashByte);
                if (hex.length() == 1)
                    hexString.append('0');
                hexString.append(hex);
            }

            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
}
