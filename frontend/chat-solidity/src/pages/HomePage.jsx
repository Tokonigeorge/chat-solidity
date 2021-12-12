import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Nameinput from "../components/Nameinput";
import { ethers } from "ethers";
import abi from "../utils/Waveportal.json";
import { useDataContextVal } from "../context/dataContext";
import { updateWaves, updateContractAddress } from "../context/actions";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = () => {
  const [{ name, message, waves }, dispatch] = useDataContextVal();
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountError, setAccountError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emptyAccount, setEmptyAccount] = useState(false);

  const contractAddress = "0x4E018dD923Dfdfa9aecA176Eb4654f1BCE15C794";
  const contractABI = abi.abi;

  const checkWalletConnect = async () => {
    //destructure etereum metamask injects into window
    try {
      const { ethereum } = window;
      setLoading(true);

      if (!ethereum) {
        console.log("We don't have the ethereum :/");
        setAccountError("errrorr");
      } else {
        console.log("Ethereum is hereee");
      }

      //check authorization to user's wallet

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        dispatch(updateContractAddress(account));
        setCurrentAccount(account);
        allWaves();
        setLoading(false);
      } else {
        console.log("Couldn't find an authorized account");
        setAccountError(error);
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
      setLoading(true);

      if (!ethereum) {
        setAccountError("Errrror");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      dispatch(updateContractAddress(accounts[0]));
      setLoading(false);
      setCurrentAccount(accounts[0]);
      allWaves();
    } catch (error) {
      setAccountError(error);
      setLoading(false);
    }
  };

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
        const wavesCleaned = waves.map((wave) => {
          return {
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message,
            name: wave.name,
            url: wave.pic,
          };
        });

        /*
         * Store our data in React State
         */
        dispatch(updateWaves(wavesCleaned));
        console.log(waves);
      } else {
        setAccountError("errrorr");
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      setAccountError("errrorr");
      console.log(error);
    }
    return waves;
  };

  useEffect(() => {
    checkWalletConnect();
  }, []);

  useEffect(() => {
    let wavePortalContract;

    const onNewWave = (from, timestamp, message, name, avatar) => {
      console.log("NewWave", from, timestamp, message);
      dispatch(
        updateWaves((prevState) => [
          ...prevState,
          {
            address: from,
            timestamp: new Date(timestamp * 1000),
            message: message,
            name: name,
            url: avatar,
          },
        ])
      );
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewWave", onNewWave);
    }

    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, []);
  return (
    <div className="flex justify-center items-center  pt-20 flex-col">
      <Profile style={"md:w-56 md:h-56 w-32 h-32"} />
      {!currentAccount && !accountError && !loading && (
        <Button
          handleClick={connectWallet}
          text="Connect to Metamask"
          type="button"
          style="mt-8"
        />
      )}
      {loading && (
        <div className="relative">
          <Loader />
        </div>
      )}
      {accountError && (
        <ErrorMessage text="We have encountered an error, this could be because you don't have the metamask extension installed or ..." />
      )}
      {currentAccount && !accountError && !loading && <Nameinput />}
    </div>
  );
};

export default HomePage;
