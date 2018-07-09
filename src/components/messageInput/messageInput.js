import React from "react";
import "./messageInput.css";

const MessageInput = ({ typing, setTypingValue, sendMessage, activeUserId }) => {

  const handleSubmit = e => {
    e.preventDefault();
    if (typing) {
      sendMessage(typing, activeUserId)
    }
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={e => setTypingValue(e.target.value)}
        value={typing}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
