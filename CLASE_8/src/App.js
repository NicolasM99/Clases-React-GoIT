import React, { useState } from "react";

import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ButtonClass from "./components/ButtonClass/ButtonClass";
import Counter from "./components/Counter/Counter";
import GreetingMessage from "./components/GreetingMessage/GreetingMessage";
import LoginForm from "./components/LoginForm/LoginForm";
import PatientsForm from "./components/PatientsForm/PatientsForm";
import PokemonList from "./components/PokemonList/PokemonList";
import CounterFunction from "./components/CounterFunction/CounterFunction";
import useToggle from "./hooks/useToggle";
import InputFunction from "./components/InputFunction/InputFunction";
import PokemonListFunc from "./components/PokemonListFunc/PokemonListFunc";
import { UserContext, UserProvider } from "./context/UserContext/UserContext";
import User from "./components/User/User";
import UserName from "./components/UserName/UserName";
import UserForm from "./components/UserForm/UserForm";
import { TranslationProvider } from "./context/TranslationContext/TranslationContext";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

const products = [
  {
    productName: "user",
    productDescription: "this is a default user",
    style: {
      color: "green",
    },
  },
  {
    image:
      "https://mariohernandez.vtexassets.com/arquivos/ids/213954/zapatos-garcia-negro-premium_1.jpg?v=637920274644600000",
    productName: "zapatos mario hernandez",
    productDescription: "color negro",
    style: {
      backgroundColor: "blue",
    },
  },
  {
    image:
      "https://motomall.com.co/wp-content/uploads/2022/09/bicicleta-fratelli-forza-azul-lado1.jpg",
    productName: "bicicleta",
    productDescription: "color azul",
  },
];

function App() {
  // const [showCounter, setShowCounter] = useState(false);
  const { handleActivate, handleDeactivate, handleToggle, active } =
    useToggle();
  const productsWithId = products.map((product, index) => ({
    ...product,
    id: index,
  }));
  return (
    <div className="App">
      {/* {productsWithId.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.image}
          name={product.productName}
          description={product.productDescription}
          style={product.style}
        />
      ))} */}
      {/* <Button>Contacto</Button>
      <Button variant={"primary"}>Iniciar sesión</Button>
      <Button variant={"secondary"}>Registro</Button>
      <Button variant={"outline"}>Outlined</Button>
      <br />
      <Button disabled>Contacto</Button>

      <Button disabled variant={"primary"}>
        Iniciar sesión
      </Button>
      <Button disabled variant={"secondary"}>
        Registro
      </Button>
      <Button disabled variant={"outline"}>
        Outlined
      </Button>
      <br />
      <Button elevated>Contacto</Button>

      <Button elevated variant={"primary"}>
        Iniciar sesión
      </Button>
      <Button elevated variant={"secondary"}>
        Registro
      </Button>
      <Button elevated variant={"outline"}>
        Outlined
      </Button>
      <br />

      <br />
      <Counter initialValue={10} step={10} />
      <GreetingMessage message="Good morning, " /> */}
      {/* <Header color={"secondary"}>Este es un título h1</Header>
      <Header variant={"h2"}>Este es un título h2</Header>
      <Header variant={"h3"}>Este es un título h3</Header>
      <Header></Header> */}
      {/* <LoginForm
        onSubmit={({ username, password }) =>
          console.log("FROM APP.JS:", username, password)
        }
      /> */}
      {/* <PatientsForm /> */}
      {/* <PokemonList date="26-07-2023" /> */}
      {/* <PokemonListFunc /> */}
      {/* <InputFunction
        label="Este es mi input funcional"
        placeholder="ingresa un texto"
      />
      <Button onClick={() => handleToggle()}>
        {active ? "Desmontar" : "Montar"} componente Count
      </Button>
      <Button variant="secondary" onClick={() => handleActivate()}>
        Montar componente Count
      </Button>
      <Button variant="primary" onClick={() => handleDeactivate()}>
        Desmontar componente Count
      </Button>
      *************************************************************
      {active && <CounterFunction />} */}

      {/* <UserContext.Provider
        value={{
          name: "Nicolás",
          email: "moreno.pnicolas@gmail.com",
          phoneNumber: "dcsccsdsdc",
        }}
      > */}
      <TranslationProvider>
        <LanguageSelector />
        <UserProvider>
          <UserForm />
          <User />
        </UserProvider>
      </TranslationProvider>

      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
