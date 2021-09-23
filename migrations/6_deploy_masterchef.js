const MasterChef = artifacts.require('MasterChef');
const VDP = artifacts.require('VDP');
const Web3 = require('web3');

module.exports = async function(deployer, network, addresses) {
    const [admin, _] = addresses;

    const DEVADDRESS = "0x4d2f9077f357c4296dab5fcd27db793ed6e0aeae";
    const FEEADDRESS = "0x4d228fea98cbce2d891caa7e50d452e5809b48e8";

    const VDP = {
        // address: "0xB473Bf366219855E55aa6854f111b374496F3404" // recently on bkc testnet
        address: "0x64E6Fd88fC69b19A8227d80aE87bcecF756BBA81" // current VDP address on BSC testnet
    }

    // const startBlock = 718880; // on bkc mainnet
    const startBlock = 12616510; // on bsc testnet
    const bonusEndBlock = 13016510;
    const vdpPerBlock = Web3.utils.toWei('0.001', 'ether');

    //   VDP _sushi,
    // address _devaddr,
    // uint256 _sushiPerBlock,
    // uint256 _startBlock,
    // uint256 _bonusEndBlock

    await deployer.deploy(MasterChef,
        VDP.address,
        DEVADDRESS,
        vdpPerBlock,
        startBlock,
        bonusEndBlock, { from: admin });

};