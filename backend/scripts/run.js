// const main = async () => {
//   const [owner, player] = await hre.ethers.getSigners();
//   const waveContractFactory = await hre.ethers.getContractFactory("Waveportal");
//   const waveContract = await waveContractFactory.deploy();
//   await waveContract.deployed();
//   console.log("Contract deployed to", waveContract.address);
//   console.log("And this is deployed by", owner.address);

//   let waveCount;
//   waveCount = await waveContract.getTotalWaves();

//   let waveTxn = await waveContract.wave();
//   await waveTxn.wait();

//   waveCount = await waveContract.getTotalWaves();

//   waveTxn = await waveContract.connect(player).wave();
//   await waveTxn.wait();

//   waveCount = await waveContract.getTotalWaves();
// };

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// runMain();

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("Waveportal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());

  let waveTxn = await waveContract.wave("A message!", "bukola", "https");
  await waveTxn.wait(); // Wait for the transaction to be mined

  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await waveContract
    .connect(randomPerson)
    .wave("Another message!", "Damola", "http2");
  await waveTxn.wait(); // Wait for the transaction to be mined

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
