const XVonderToken = artifacts.require('XVonderToken');
const Web3 = require('web3');

module.exports = async (deployer, network, addresses) => {
  const [admin] = addresses;
  await deployer.deploy(XVonderToken, { from: admin, gas: '3000000' });
  const XVON = await XVonderToken.deployed();
  // const mintAmount = 1000000 * 10 ** 18;
  const mintAmount = Web3.utils.toWei('1000000', 'ether');
  await XVON.mint(mintAmount);
  console.log("XVonderToken: " + XVonderToken.address);
  console.log("Minted:" + mintAmount)
};