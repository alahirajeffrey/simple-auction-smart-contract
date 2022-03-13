const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const SimpleAuction = await ethers.getContractFactory("SimpleAuction");
  const auction = await SimpleAuction.deploy(deployer.address, 100)

  console.log("Simple auction deployed to:", auction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
