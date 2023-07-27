import React from "react";
import { useUserContext } from "../../context/UserContext/UserContext";
import Header from "../Header/Header";

const UserName = () => {
  const { name } = useUserContext();
  return <Header variant={"h5"}>{name}</Header>;
};

export default UserName;
