import React from "react";
import { useUserContext } from "../../context/UserContext/UserContext";

const UserEmail = () => {
  const { email } = useUserContext();
  return <p>{email}</p>;
};

export default UserEmail;
