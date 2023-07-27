import React from "react";
import UserName from "../UserName/UserName";
import UserEmail from "../UserEmail/UserEmail";
import UserPhoneNumber from "../UserPhoneNumber/UserPhoneNumber";
import { useUserContext } from "../../context/UserContext/UserContext";

const User = () => {
  const { userInfo } = useUserContext();
  return (
    <div>
      <h3>{userInfo}</h3>
      <UserName />
      <UserEmail />
      <UserPhoneNumber />
    </div>
  );
};

export default User;
