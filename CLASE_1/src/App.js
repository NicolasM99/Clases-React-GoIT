import React from "react";

import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    productName: "user",
    productDescription: "this is a default user",
  },
  {
    id: 2,
    image:
      "https://mariohernandez.vtexassets.com/arquivos/ids/213954/zapatos-garcia-negro-premium_1.jpg?v=637920274644600000",
    productName: "zapatos mario hernandez",
    productDescription: "color negro",
  },
  {
    id: 3,
    image:
      "https://motomall.com.co/wp-content/uploads/2022/09/bicicleta-fratelli-forza-azul-lado1.jpg",
    productName: "bicicleta",
    productDescription: "color azul",
  },
];

function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.image}
          name={product.productName}
          description={product.productDescription}
        />
      ))}
    </div>
  );
}

export default App;
