const VDPMaster = artifacts.require("VDPMaster");
// const XVON = artifacts.require("XVonderToken");
const VDP = artifacts.require("VDP");
const Web3 = require("web3");

module.exports = (deployer, network, addresses) => {
    const [admin] = addresses;

    const BUSD = {
        address: "0x322e4612792dcdd60a50f9802c823e7b51ef1e31"
    };

    const XVON = {
        address: "0x8fd45fe67984a325e823c091238596984041b9eb"
    };

    const TREASURY = {
        address: "0x1f13c3e96D3243a97F90Fba32CA2E3525A38976b"
    }

    const maxStakeAmount = Web3.utils.toWei('1000', 'ether');

    // IVDP _vdp, IERC20 _busd, IERC20 _xvon, address _treasury, uint256 _maxStakeAmount
    deployer.deploy(VDPMaster, VDP.address, BUSD.address, XVON.address, TREASURY.address, maxStakeAmount, { from: admin, gas: '3000000' });
};