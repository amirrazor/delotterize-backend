const { ethers } = require("hardhat");
const networkConfig = {
  5: {
    name: "Goerli-Testnet",
    vrfCoordinator: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    entranceFee: ethers.utils.parseEther("0.001"),
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    subscriptionId: "8620",
    callbackGasLimit: "500000",
    interval: "604800",
  },
  1: {
    name: "Ethereum-Mainnet",
    vrfCoordinator: "0x271682DEB8C4E0901D1a1550aD2e64D568E69909",
    entranceFee: ethers.utils.parseEther("0.00001"),
    gasLane:
      "0x8af398995b04c28e9951adb9721ef74c74f93e6a478f39e7e0777be13527e7ef",
  },
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("1"),
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    //same as goerli because unimportant
    callbackGasLimit: "500000",
    interval: "60",
  },
  137: {
    name: "Polygon-Mainnet",
    vrfCoordinator: "0xAE975071Be8F8eE67addBC1A82488F1C24858067",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0x6e099d640cde6de9d40ac749b4b594126b0169747122711109c9985d47751f93",
  },
  80001: {
    name: "Mumbai-Testnet",
    vrfCoordinator: "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
