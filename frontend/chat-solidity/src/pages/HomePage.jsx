import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Nameinput from "../components/Nameinput";
import { ethers } from "ethers";
import abi from "../utils/Waveportal.json";
import { useDataContextVal } from "../context/dataContext";

const HomePage = () => {
  const [{ name }] = useDataContextVal();
  const [currentAccount, setCurrentAccount] = useState("");
  const [allwaves, setAllWaves] = useState([]);
  const [accountError, setAccountError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emptyAccount, setEmptyAccount] = useState(false);

  const contractAddress = "0xB071B9C28EE9dCB2f5af09848Fe6A35AEAef933e";
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
      setLoading(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        allWaves();
        setLoading(false);
      } else {
        console.log("Couldn't find an authorized account");
        setLoading(false);
      }
    } catch (error) {
      setAccountError(error);
      setLoading(false);
    }
  };

  //connect wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setAccountError("Errrror");
        return;
      }
      setLoading(true);

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setLoading(false);
      setCurrentAccount(accounts[0]);
      allWaves();
    } catch (error) {
      setAccountError(error);
      setLoading(false);
    }
  };

  //get allwaves function
  const allWaves = async () => {
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

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();
        console.log(waves);

        let wavesCleaned = [];
        waves.forEach((wave) => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message,
          });
        });

        /*
         * Store our data in React State
         */
        setAllWaves(wavesCleaned);
        console.log(wavesCleaned);
        console.log(allwaves);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
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
        // const waveTxn = await wavePortalContract.wave();
        const waveTxn = await wavePortalContract.wave("this is a message");
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
        allWaves();
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
    <div className="flex justify-center items-center pt-48 md:pt-24 flex-col">
      <Profile style={"md:w-56 md:h-56 w-32 h-32"} />
      {!currentAccount &&
        (loading ? null : (
          <Button
            handleClick={connectWallet}
            text="Connect to Metamask"
            type="button"
            style="mt-8"
          />
        ))}
      {loading && (
        <div className="relative">
          <Loader />
        </div>
      )}
      {accountError && (
        <p>
          Please connect to Metamask, If you don't have, you can get it here
        </p>
      )}
      {currentAccount && <Nameinput />}
      <button onClick={wave}>Wave</button>
      {/* {!currentAccount && (
            <button onClick={connectWallet}>Connect Account</button>
          )} */}
    </div>
  );
};

export default HomePage;
