import React from "react";
import "../styles/scrollbar.css";
import ParticipantMessage from "./ParticipantMessage";
import SentMessage from "./SentMessage";

const ChatArea = () => {
  return (
    <div className="h-3/4 overflow-y-scroll styleScroll relative">
      <div className="absolute top-0 pt-4 left-0">
        <ParticipantMessage />
        <ParticipantMessage />
        <ParticipantMessage />
        <ParticipantMessage />
        <SentMessage />
        <SentMessage />
        <SentMessage />
      </div>
    </div>
  );
};

export default ChatArea;
