const VDPMaster = artifacts.require("VDPMaster");
// const XVON = artifacts.require("VonderToken");
// const VDP = artifacts.require("VDP");
const Web3 = require("web3");

module.exports = (deployer, network, addresses) => {
    const [admin] = addresses;

    const VDP = {
        address: "0xA80D76Abb3087F730Ce14aAf54b211611bAc0bE8" // BSC MAINNET
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

    const maxStakeAmount = Web3.utils.toWei('1000', 'ether');

    // IVDP _vdp, IERC20 _busd, IERC20 _xvon, address _treasury, uint256 _maxStakeAmount
    deployer.deploy(VDPMaster, VDP.address, BUSD.address, XVON.address, TREASURY.address, maxStakeAmount, { from: admin, gas: '3000000' });
};