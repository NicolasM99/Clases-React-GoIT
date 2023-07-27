import React, { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //   const [userInfo, setUserInfo] = useState("");

  //   useEffect(() => {
  //     const nameInfo = name ? `Nombre de usuario: ${name}` : undefined;
  //     const emailInfo = email ? `Email: ${email}` : undefined;
  //     const phoneNumberInfo = phoneNumber ? `Número: ${phoneNumber}` : undefined;
  //     const result = [nameInfo, emailInfo, phoneNumberInfo]
  //       .filter((info) => Boolean(info))
  //       .join(", ");
  //     setUserInfo(result);
  //   }, [name, email, phoneNumber]);

  //   const userInfo = `Nombre de usuario: ${name}, Email: ${email}, Número: ${phoneNumber}`;

  const userInfo = useMemo(() => {
    const nameInfo = name ? `Nombre de usuario: ${name}` : undefined;
    const emailInfo = email ? `Email: ${email}` : undefined;
    const phoneNumberInfo = phoneNumber ? `Número: ${phoneNumber}` : undefined;
    const result = [nameInfo, emailInfo, phoneNumberInfo]
      .filter((info) => Boolean(info))
      .join(", ");
    return result;
  }, [name, email, phoneNumber]);

  return (
    <UserContext.Provider
      value={{
        name,
        email,
        phoneNumber,
        userInfo,
        setName,
        setEmail,
        setPhoneNumber,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

// export { UserContext, useUserContext };
export { UserContext, UserProvider, useUserContext };
