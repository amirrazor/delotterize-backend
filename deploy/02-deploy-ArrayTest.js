const { ethers, network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const arrayTest = await deploy("ArrayTest", {
    from: deployer,
    args: [],
    log: true,
  });
  
  log(
    "_____________________________Test Array deployed__________________________________"
  );
};
