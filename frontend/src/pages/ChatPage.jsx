import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Topbar from "../components/Topbar";
import ParticipantList from "../components/ParticipantList";
import { useDataContextVal } from "../context/dataContext";
import {
  updateParticipantList,
  updateNavActive,
  updateChatError,
  updateWaves,
} from "../context/actions";
import ErrorMessage from "../components/ErrorMessage";
import "../styles/nav.css";
import { ethers } from "ethers";
import abi from "../utils/Waveportal.json";

const ChatPage = () => {
  const [{ list, waves, name, chatError, active }, dispatch] =
    useDataContextVal();
  // const [loading, setLoading] = useState(true);
  const nav = ["Participants", "Messages"];
  const contractAddress = "0x9281D493B67AE8E6df9374945c9A57fee5832A2b";
  const contractABI = abi.abi;

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
      );

      //Call the getAllWaves method from your Smart Contract

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

      dispatch(updateWaves(wavesCleaned));
      console.log(waves);
    } catch (error) {
      //update the error state if there's an error
      dispatch(updateChatError(true));
      console.log(error);
    }
    return waves;
  };
  useEffect(() => {
    waves.length === 0 && allWaves();
    dispatch(updateParticipantList(filterList(waves)));
  }, [waves]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleActive = (indx) => {
    dispatch(updateNavActive(indx.target.textContent));
  };
  return (
    <>
      {name && !chatError ? (
        <>
          <div className=" hidden md:flex">
            <Sidebar />
            <div className="flex-auto h-screen py-2.5 pr-4">
              <Chat />
            </div>
          </div>
          <div className="block md:hidden px-4">
            <div className="sticky top-0 bg-bgWhite pl-2">
              <Topbar />
              <div className="pt-4 pb-2 border-b border-gray-200 flex">
                {nav?.map((i, indx) => (
                  <a
                    onClick={(indx) => handleActive(indx)}
                    key={indx + `${i}`}
                    className={`text-sm text-textGray font-bold cursor-pointer link ${
                      indx == 0 ? "pr-3" : "px-3"
                    } ${active === i && "active"}`}
                  >
                    {i}
                  </a>
                ))}
                {/* <p className="text-sm text-textGray font-bold pr-3">
                  Participants
                </p>
                <p className="text-sm text-textGray font-bold px-3">Messages</p> */}
              </div>
            </div>
            {active === "Participants" ? (
              <>
                {" "}
                <div className="mt-2">
                  {list?.map((i, indx) => {
                    return (
                      <ParticipantList
                        name={i.name}
                        date={i.timestamp}
                        message={i.message}
                        key={indx + `${i}`}
                        url={i.url}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="h-screen">
                <Chat />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <ErrorMessage
            text={"Couldn't retrieve data, try going back and reload"}
          />
        </div>
      )}
    </>
  );
};

export default ChatPage;

export const filterList = (arr) => {
  return arr?.filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i);
};
