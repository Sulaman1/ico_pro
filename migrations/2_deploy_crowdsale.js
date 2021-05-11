const DappToken = artifacts.require("./DappToken.sol");

module.exports = function (deployer) {
    const name_ = "Dapp Token";
    const symbol_ = "DAPP";
    
  deployer.deploy(DappToken, name_, symbol_);
};
