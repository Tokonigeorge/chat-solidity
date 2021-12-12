import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Topbar from "../components/Topbar";
import ParticipantList from "../components/ParticipantList";
import { useDataContextVal } from "../context/dataContext";
import { updateParticipantList, updateNavActive } from "../context/actions";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "../styles/nav.css";

const ChatPage = () => {
  const [{ list, waves, name, chatError, active }, dispatch] =
    useDataContextVal();
  const [loading, setLoading] = useState(true);
  const nav = ["Participants", "Messages"];
  useEffect(() => {
    dispatch(updateParticipantList(filterList(waves)));
    console.log(waves);
  }, [waves]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleActive = (indx) => {
    dispatch(updateNavActive(indx.target.textContent));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : name && !chatError ? (
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
                    key={indx}
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
                        key={indx}
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
