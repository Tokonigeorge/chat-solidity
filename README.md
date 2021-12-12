<!-- # Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
``` -->

# Overview
<p>This ia a basic chat app that stores user data on the blockchain.</p>

# Motivation
<p>I took up this project to understand solidity and smart contracts better. </p>

# How to test
Fork the repo.
Clone the repo
```shell
 git clone git@github.com:[your_github_handle]/chat-solidity.git
```
Navigate to the hardhat.congfig.js file in the backend folder 
```shell
cd backend
```
and set up your .env variable after signing up a project on Alchemy. 
Deploy with
```shell
 npx hardhat run scripts/deploy.js --network rinkeby
 ```
 Copy the Contract adress and go to the frontend folder.
 Paste the address where you see contract address in the Homepage.jsx and ChatInput.jsx files.
 ```shell
 contractAddress = YOUR_CONTRACT_ADDRESS
 ```
 Go to the backend folder and copy everthing in the Waveportal.json file
 ```shell
 cd backend/artifacts/contracts/Waveportal.sol/Waveportal.json
 ```
 Paste it in the waveportal.json file found in the utils folder on the frontend
 ```shell
 cd frontend/src/utils/waveportal.json
 ```
 Go to the frontend folder and run
 ```shell
 cd frontend
 npm install
 npm run dev
 ```
 To run it on localhost.
 # Deployed site
 https://web3-chatapp.netlify.app/
