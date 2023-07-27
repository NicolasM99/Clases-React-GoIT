import React from "react";
import { useUserContext } from "../../context/UserContext/UserContext";

const UserPhoneNumber = () => {
  const { phoneNumber } = useUserContext();
  return <i>{phoneNumber}</i>;
};

export default UserPhoneNumber;
