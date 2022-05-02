import hre from "hardhat";
import ethers from "@nomiclabs/hardhat-ethers";
import { Contract, ContractFactory } from "ethers";

const main = async () => {

  const TransactionsFactory : ContractFactory = await hre.ethers.getContractFactory("Transactions");
  const transactions : Contract = await TransactionsFactory.deploy();

  await transactions.deployed();

  console.log(`Transaction deployed to: ${transactions.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();