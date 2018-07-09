import React from "react";
import Header from "./../header";
import Chats from './../chats'
import { values } from 'lodash'
import MessageInput from './../messageInput'
import './chatWindow.css'

const ChatWindow = ({ activeUserId, contacts, messages, typing, setTypingValue, sendMessage }) => {
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={values(activeMsgs)} />
      <MessageInput sendMessage={sendMessage} setTypingValue={setTypingValue} typing={typing} activeUserId={activeUserId}/>
    </div>
  );
};

export default ChatWindow;
