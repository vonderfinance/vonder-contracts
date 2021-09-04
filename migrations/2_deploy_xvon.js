const VonderToken = artifacts.require('VonderToken');
const Web3 = require('web3');

module.exports = async (deployer, network, addresses) => {
  const [admin] = addresses;
  await deployer.deploy(VonderToken, { from: admin, gas: '3000000' });
  const XVON = await VonderToken.deployed();
  // const mintAmount = 1000000 * 10 ** 18;
  // const mintAmount = Web3.utils.toWei('1000000', 'ether');
  // await XVON.mint(mintAmount);
  // console.log("VonderToken: " + VonderToken.address);
  // console.log("Minted:" + mintAmount)
};