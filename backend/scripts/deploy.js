const { ethers } = require("hardhat");

async function main() {
  const defaultFee = 3;

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(defaultFee);

  await lottery.deployed();

  console.log(`Lottery contract deployed to ${lottery.address}`);

  saveFrontendFiles(lottery);
}

function saveFrontendFiles(myContract) {
  const fs = require("fs");
  const contractsDir = path.join(
    __dirname,
    "..",
    "..",
    "/frontend",
    "src",
    "contracts"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "Lottery-address.json"),
    JSON.stringify({ ["Lottery-address"]: myContract.address }, undefined, 2)
  );

  const LotteryArtifact = artifacts.readArtifactSync("Lottery");

  fs.writeFileSync(
    path.join(contractsDir, "Lottery.json"),
    JSON.stringify(LotteryArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
