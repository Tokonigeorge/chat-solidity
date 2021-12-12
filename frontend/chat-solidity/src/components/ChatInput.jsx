import React, { useState } from "react";
import { useDataContextVal } from "../context/dataContext";
import {
  updateTyping,
  updateMessage,
  updateWaves,
  updateChatError,
} from "../context/actions";
import { ethers } from "ethers";
import abi from "../utils/Waveportal.json";

const ChatInput = () => {
  const [{ typing, message, name, waves, chatError, avatar }, dispatch] =
    useDataContextVal();
  const [value, setValue] = useState("");
  const contractAddress = "0x9281D493B67AE8E6df9374945c9A57fee5832A2b";
  const contractABI = abi.abi;

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(updateMessage(e.target.value));
  };

  const handleFocus = () => {
    dispatch(updateTyping(true));
  };

  const handleFocusOut = () => {
    dispatch(updateTyping(false));
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
        const waveTxn = await wavePortalContract.wave(message, name, avatar);
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
        allWaves();
      } else {
        console.log("Ethereum object doesn't exist!");
        dispatch(updateChatError(true));
      }
    } catch (error) {
      // dispatch(updateChatError(true));
      alert("Transaction not sucessful, try again");
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
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
    return waves;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      return;
    } else {
      // console.log("This is the message", message, name);
      setValue("");
      wave();
    }
  };

  return (
    <div className="mx-4">
      <form
        className="flex bg-bgWhite w-full mb-4 rounded-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          placeholder="send me a message through the blockchain..."
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          onFocus={handleFocus}
          onBlur={handleFocusOut}
          className="w-full bg-transparent outline-none py-3 px-2 text-xs text-textBlue"
        />
        <button
          type="button"
          onClick={(e) => handleSubmit(e)}
          className="bg-boldGreen px-2.5 my-1 mr-1.5 rounded-lg text-bgWhite"
        >
          <Sendicon style={{ textColor: "white" }} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;

const Sendicon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 20 20"
      fill="currentColor"
      className=" transform rotate-45"
    >
      <path
        fill="currentColor"
        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 
      1.428a1 1 0 001.17-1.408l-7-14z"
      />
    </svg>
  );
};
