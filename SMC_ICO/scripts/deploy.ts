import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);


    // const Floppy = await ethers.getContractFactory("Floppy");
    // const floppy = await Floppy.deploy();
    // console.log('Floppy address: ', floppy.getAddress);
    // Config.setConfig(network + '.Floppy', await floppy.getAddress());

    // const Vault = await ethers.getContractFactory("Vault");
    // const vault = await Vault.deploy();
    // console.log('Floppy address: ', vault.getAddress);
    // Config.setConfig(network + '.Vault', await vault.getAddress());
    
    // const Floppy = await ethers.getContractFactory("USDT");
    // const floppy = await Floppy.deploy();
    // console.log('USDT address: ', floppy.getAddress);
    // Config.setConfig(network + '.USDT', await floppy.getAddress());

    // const Ico = await ethers.getContractFactory("FLPCrowdSale");
    // const ico = await Ico.deploy(1000,100,'0x161502529604Efd0eB793Cb8e5f54c04E160F250', '0x7eFa6726ce1A73d8c6bc926E11634249F32CD180');
    // console.log('ICO address: ', ico.getAddress);
    // Config.setConfig(network + '.ico', await ico.getAddress());

    
    // const Hero = await ethers.getContractFactory("Hero");
    // const hero = await Hero.deploy();
    // console.log('stman hero address: ', hero.getAddress());
    // Config.setConfig(network + '.Hero', await hero.getAddress());


    const MKP = await ethers.getContractFactory("HeroMarketplace");
    const heroMarketplace = await MKP.deploy("0xCe9874d85c40271f20F6a1832Ad77439D273dF96", "0x7eFa6726ce1A73d8c6bc926E11634249F32CD180");
    console.log('Market deployed at: ', heroMarketplace.getAddress());
    Config.setConfig(network + '.HeroMarketplace', await heroMarketplace.getAddress());
    
    // const Auction = await ethers.getContractFactory("Auction");
    // const auction = await Auction.deploy("0x161502529604Efd0eB793Cb8e5f54c04E160F250", "0xB410126E02E5760feD7185cE6EC180c27C5B57fd");

    // console.log('Hợp đồng Auction đã triển khai tại địa chỉ: ', auction.address);

    // Config.setConfig(network + '.Auction', auction.address);

    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});