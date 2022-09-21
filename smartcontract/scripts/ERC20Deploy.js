
const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const ERC20ContractFactory =  await ethers.getContractFactory("ERC20Factory")
  const ERC20Deployed = await ERC20ContractFactory.deploy();

  await ERC20Deployed.deployed()


  console.log("ERC20 Token address: ", ERC20Deployed.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
