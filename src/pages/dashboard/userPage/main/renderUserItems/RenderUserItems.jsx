import React from "react";
import UserItem from "../userItem/UserItem";
import { userItems } from "../../../../../data/userItem";
const RenderUserItem = () => {
  return (
    <div className="user-items">
      {userItems.map(({ id, name, role, img, email }) => (
        <UserItem id={id} name={name} role={role} img={img} email={email} />
      ))}
    </div>
  );
};

export default RenderUserItem;
