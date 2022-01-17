import React from "react";
import "../styles/scrollbar.css";
import ParticipantMessage from "./ParticipantMessage";
import SentMessage from "./SentMessage";
import { useDataContextVal } from "../context/dataContext";

const ChatArea = () => {
  const [{ waves, name, address }] = useDataContextVal();

  return (
    <div className="md:h-3/4 h-3/4 overflow-y-scroll styleScroll relative">
      <div className="absolute top-0 pt-4 pb-6 left-0 w-full">
        {waves?.map((i, indx) => {
          return i.address?.toString().toUpperCase() ==
            address?.toString().toUpperCase() ? (
            <SentMessage
              key={indx + `${i.message}`}
              date={i.timestamp}
              message={i.message}
            />
          ) : (
            <ParticipantMessage
              key={indx + `${i.message}`}
              date={i.timestamp}
              name={i.name}
              message={i.message}
              url={i.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatArea;
