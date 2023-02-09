const { assert, expect } = require("chai");
const { getNamedAccounts, deployments, network, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../../helper-hardhat-config.js");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Lottery unit tests", () => {
      let lottery, vrfCoordinatorV2Mock, deployer;
      const chainId = network.config.chainId;
      beforeEach(async () => {
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);
        lottery = await ethers.getContract("Lottery", deployer);
        vrfCoordinatorV2Mock = await ethers.getContract(
          "VRFCoordinatorV2Mock",
          deployer
        );
      });

      describe("constructor", () => {
        it("should initialize the Lottery correctly", async () => {
          const lotteryState = await lottery.getLotteryState();
          const interval = await lottery.getInterval();
          assert.equal(lotteryState.toString(), "0");
          assert.equal(interval.toString(), networkConfig[chainId]["interval"]);
        });
      });
      describe("enter Lottery", () => {
        it("reverts when you don't pay enough", async () => {
          await expect(
            lottery.enterLottery({
              value: ethers.utils.parseEther("0.5"),
            })
          ).to.be.reverted;
        });
        it("records players when they enter", async () => {
          await lottery.enterLottery({
            value: ethers.utils.parseEther("1.5"),
          });
          const player = await lottery.getPlayers(0);
          assert.equal(player, deployer);
        });
        it("emits event when entered", async () => {
          await expect(
            lottery.enterLottery({
              value: ethers.utils.parseEther("1.5"),
            })
          ).to.emit(lottery, "LotteryEnter");
        });
        it("Doesn't allow entrance when lottery state is calculating", async () => {
          await lottery.getLotteryState();
          await expect(
            lottery.enterLottery({
              value: ethers.utils.parseEther("1.5"),
            })
          ).to.be.reverted;
        });
      });
    });
