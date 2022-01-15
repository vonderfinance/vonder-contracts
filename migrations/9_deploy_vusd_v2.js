const VUSD = artifacts.require("VUSD");
const Web3 = require("web3");

module.exports = async (deployer, network, addresses) => {
	const [admin] = addresses;
  deployer.deploy(VUSD,{ from: admin, gas: '3000000' });
  // const VDP = await VDPToken.deployed();

  // const mintAmount = Web3.utils.toWei('1000000', 'ether');
  // await VDP.mint(mintAmount);
  // console.log("VDP: " + VDP.address);
  // console.log("Minted:" + mintAmount);
};
