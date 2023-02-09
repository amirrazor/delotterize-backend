const { ethers } = require("hardhat");

async function enterLottery() {
  const lottery = await ethers.getContract("Lottery");
  await lottery.enterLottery({ value: ethers.utils.parseEther("0.01") });
  console.log("Entered!");
}

enterLottery()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
