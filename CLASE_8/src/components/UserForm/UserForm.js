import React, { useRef } from "react";
import InputFunction from "../InputFunction/InputFunction";
import { nanoid } from "nanoid";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useTranslationContext } from "../../context/TranslationContext/TranslationContext";
import Button from "../Button/Button";

const UserForm = () => {
  const { name, email, phoneNumber, setName, setEmail, setPhoneNumber } =
    useUserContext();
  const { language } = useTranslationContext();
  const buttonRef = useRef();
  return (
    <div>
      <InputFunction
        label={language === "es" ? "Nombre de usuario" : "User name"}
        id={nanoid()}
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputFunction
        label={language === "es" ? "Correo electrónico" : "Email"}
        id={nanoid()}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputFunction
        label={language === "es" ? "Número de teléfono" : "Phone number"}
        id={nanoid()}
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onBlur={() => buttonRef.current.click()}
      />
      <Button
        ref={buttonRef}
        onClick={() => console.log("Valores:", { name, email, phoneNumber })}
      >
        Enviar
      </Button>
    </div>
  );
};

export default UserForm;
