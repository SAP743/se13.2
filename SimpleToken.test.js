const SimpleToken = artifacts.require("SimpleToken");

contract("SimpleToken", (accounts) => {
    it("should deploy with a total supply", async () => {
        const tokenInstance = await SimpleToken.deployed();
        const totalSupply = await tokenInstance.totalSupply();

        assert.equal(totalSupply, 1000000, "Total supply should be 1,000,000");
    });
});
