const { developmentChains } = require("../helper-hardhat-config.js");

const BASE_FEE = ethers.utils.parseEther("0.25"); //0.25 LINK for the premium, per request
const GAS_PRICE_LINK = 1e9;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log(deployer);
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    log("local network detected, deplyoing mocks now..");
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: [BASE_FEE, GAS_PRICE_LINK],
    });
    log(
      "_____________________________Mock deployed__________________________________"
    );
  }
};

module.exports.tags = ["all", "mocks"];
