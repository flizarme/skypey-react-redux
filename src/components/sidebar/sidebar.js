import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { values } from 'lodash'
import User from './../user'
import { setActiveUserId } from './../../actions/activeUserIdActions'
import "./sidebar.css"

const Sidebar = ({contacts, setActiveUserId}) => {
  const contactList = values(contacts)
  return (
    <aside className="Sidebar">
      {contactList.map(contact => <User setActiveUserId={setActiveUserId} user={contact} key={contact.user_id} />)}
    </aside>
  );
};

const mapStateToProps = ({contacts}) => {
  return {
    contacts
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      setActiveUserId
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
