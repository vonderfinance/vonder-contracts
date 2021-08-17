const Express = artifacts.require("Express");
const XVON = artifacts.require("XVonderToken");

module.exports = (deployer, network, addresses) => {
		const [admin] = addresses;
    const VON = {
      address: "0xb167658b19e5BcD3a6106E6C6B73c8c35f1D6bfe"
    };

    const XVON = {
    	address: "0x8fD45Fe67984a325E823C091238596984041b9eB"
    };

    const burnTo = {
      address: "0x000000000000000000000000000000000000dead"
    };

    deployer.deploy(Express, VON.address, XVON.address, { from: admin, gas: '3000000' });
};