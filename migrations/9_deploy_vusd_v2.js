const VUSD = artifacts.require("VUSD");

module.exports = async (deployer, network, addresses) => {
    const [admin] = addresses;
    deployer.deploy(VUSD, { from: admin });
};