import React from "react";
import "./user.css";

const User = ({ user, setActiveUserId }) => {
  const { name, profile_pic, status, user_id } = user;

  return (
    <div className="User" onClick={() => setActiveUserId(user_id)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
