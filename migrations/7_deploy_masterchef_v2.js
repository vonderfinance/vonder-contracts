const MasterChefV2 = artifacts.require('MasterChefV2');
const Web3 = require('web3');

module.exports = async function(deployer, network, addresses) {
    const [admin, _] = addresses;

    const MASTERCHEF = "0x0e8ea68ded895088c9556eFdbE801349461604a9";
    const VDP = "0x64E6Fd88fC69b19A8227d80aE87bcecF756BBA81";

    await deployer.deploy(MasterChefV2, MASTERCHEF, VDP, 0, { from: admin });
};