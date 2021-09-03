const Express = artifacts.require("Express");
// const XVON = artifacts.require("VonderToken");

module.exports = (deployer, network, addresses) => {
		const [admin] = addresses;
    const VON = {
      address: "0x19dade57B0BBCE7D5E859ba02846820f5c0c2b09"
    };

    const XVON = {
    	address: "0x2D648afb0BF14808a6DEa4b549b3614c327927d9"
    };

    const burnTo = {
      address: "0x000000000000000000000000000000000000dead"
    };

    deployer.deploy(Express, VON.address, XVON.address, admin, { from: admin, gas: '3000000' });
};