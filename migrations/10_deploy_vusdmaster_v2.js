const VUSDMasterV2 = artifacts.require("VUSDMasterV2");
const Web3 = require("web3");

module.exports = (deployer, network, addresses) => {
    const [admin] = addresses;

    const VUSD = {
        address: "0x5ac7048d2996cc118c8ec6cd79045f7a76176df2" // BSC MAINNET
    }

    const BUSD = {
        address: "0xe9e7cea3dedca5984780bafc599bd69add087d56" // BSC MAINNET
    };

    const XVON = {
        address: "0xD42220De5F5260cCC4C80Fe3B08DAE0968688d13" // BSC MAINNET
    };

    const TREASURY = {
        address: "0x4d228fea98cbce2d891caa7e50d452e5809b48e8" // feeCollector
    }

    const SUSHIROUTER = {
    	address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506"
    }

    const maxStakeAmount = Web3.utils.toWei('3000', 'ether');
    const maxRedeemAmount = Web3.utils.toWei('1000', 'ether');
    const maxStakePerBlock = Web3.utils.toWei('1000', 'ether');

    deployer.deploy(VUSDMasterV2, VUSDv2.address, BUSD.address, XVON.address, TREASURY.address,SUSHIROUTER.address, maxStakeAmount,maxRedeemAmount,maxStakePerBlock, { from: admin, gas: '3000000' });
};