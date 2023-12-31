const NFT = artifacts.require("NFT")

module.exports = async function (developer) {
    await developer.devploy(
        NFT,
        
    )
}