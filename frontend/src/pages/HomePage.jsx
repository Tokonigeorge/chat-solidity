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
  const [noEth, setNoEth] = useState(false);

  const contractAddress = "0x9281D493B67AE8E6df9374945c9A57fee5832A2b";
  const contractABI = abi.abi;

  const checkWalletConnect = async () => {
    //destructure etereum metamask injects into window
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setNoEth(true);
      } else {
        console.log("Ethereum is hereee");
      }

      //check authorization to user's wallet
      allWaves();
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        dispatch(updateContractAddress(account));
        setCurrentAccount(account);
        setAccountError(false);
      } else {
        console.log("Couldn't find an authorized account");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //connect wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      setLoading(true);

      if (!ethereum) {
        setLoading(false);
        setNoEth(true);
        allWaves();
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      dispatch(updateContractAddress(accounts[0]));
      setLoading(false);
      setAccountError(false);
      setCurrentAccount(accounts[0]);
      allWaves();
    } catch (error) {
      setAccountError(error);
      setLoading(false);
    }
  };

  const allWaves = async () => {
    try {
      const provider = new ethers.providers.InfuraProvider(
        "rinkeby",
        import.meta.env.VITE_INFURIAKEY
      );

      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
        // signer
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
      {!currentAccount && !loading && !noEth && (
        <Button
          handleClick={connectWallet}
          text="Connect to rinkeby network"
          type="button"
          style="mt-8"
        />
      )}
      {/* {!currentAccount && !loading && (
        <Button
          handleClick={connectWallet}
          text="No metamask? Click here"
          type="button"
          style="mt-8"
        />
      )} */}
      {loading && (
        <div className="relative">
          <Loader />
        </div>
      )}
      {accountError && !loading && (
        <div className="mt-10 mx-2 md:mt-0 md:mx-0">
          <ErrorMessage text="We ran into an error. Please make sure your network is set to Rinkeby." />
        </div>
      )}
      {noEth && (
        <>
          <p className="w-full px-10 md:w-96 text-sm font-light text-textBlue text-center mt-6">
            We noticed you don't have the metamask extension installed, don't
            worry, you still get to see the chats.
          </p>
          <Nameinput />
        </>
      )}
      {currentAccount && !loading && <Nameinput />}
    </div>
  );
};

export default HomePage;
