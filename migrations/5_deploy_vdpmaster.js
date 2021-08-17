const VDPMaster = artifacts.require("VDPMaster");
const XVON = artifacts.require("XVonderToken");
const VDP = artifacts.require("VDP");
const Web3 = require("web3");

module.exports = (deployer, network, addresses) => {
		const [admin] = addresses;

    const BUSD = {
    	address: "0x8fD45Fe67984a325E823C091238596984041b9eB"
    };

    const TREASURY = {
    	address: admin
    }

    const maxStakeAmount = Web3.utils.toWei('1000', 'ether');

    // IVDP _vdp, IERC20 _busd, IERC20 _xvon, address _treasury, uint256 _maxStakeAmount
    deployer.deploy(VDPMaster, VDP.address, BUSD.address,XVON.address,TREASURY.address,maxStakeAmount, { from: admin, gas: '3000000' });
};