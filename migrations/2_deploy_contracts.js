/* global artifacts:true */
const Casino = artifacts.require('./Casino.sol');

module.exports = (deployer) => {
  deployer.deploy(Casino, 100000, 10);
};
