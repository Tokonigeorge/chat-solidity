import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from "ethers";
import abi from "./utils/Waveportal.json";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");

  const contractAddress = "0x3c45db73db1a9588c63f312a0b14e3ff45507f2d";
  const contractABI = abi.abi;

  const checkWalletConnect = async () => {
    //destructure etereum metamask injects into window
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("We don't have the ethereum :/");
      } else {
        console.log("Ethereum is hereee");
      }

      //check authorization to user's wallet

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("Couldn't find an authorized account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //connect wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //our wave function
  const wave = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        /*
         * Execute the actual wave from your smart contract
         */
        const waveTxn = await wavePortalContract.wave();
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkWalletConnect();
  }, []);

  return (
    <div className="App">
      <p>Hey there</p>
      <button onClick={wave}>Wave</button>
      <div>
        {!currentAccount && (
          <button onClick={connectWallet}>Connect Account</button>
        )}
      </div>
    </div>
  );
}

export default App;
