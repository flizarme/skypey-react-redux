import React from 'react';
import { bindActionCreators } from 'redux'
import { setTypingValue, sendMessage } from './../../actions/typingActions'
import { connect } from 'react-redux'
import Empty from './../empty'
import ChatWindow from './../chatWindow'
import './main.css';

const Main = ({user, activeUserId, contacts, messages, typing, setTypingValue, sendMessage}) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow
        sendMessage={sendMessage}
        setTypingValue={setTypingValue}
        typing={typing}
        messages={messages}
        contacts={contacts}
        activeUserId={activeUserId}
      />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

const mapStateToProps = ({activeUserId, user, contacts, messages, typing}) => {
  return {
    user,
    activeUserId,
    contacts,
    messages,
    typing
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTypingValue,
      sendMessage
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Main);
