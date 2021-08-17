const VDPToken = artifacts.require("VDP");

module.exports = async (deployer, network, addresses) => {
	const [admin] = addresses;
  deployer.deploy(VDPToken,{ from: admin, gas: '3000000' });
  const VDP = await VDPToken.deployed();
  // const mintAmount = 1000000 * 10 ** 18;
  // const mintAmount = Web3.utils.toWei('1000000', 'ether');
  // await VDP.mint(mintAmount);
  // console.log("VDP: " + VDP.address);
  // console.log("Minted:" + mintAmount)
};
