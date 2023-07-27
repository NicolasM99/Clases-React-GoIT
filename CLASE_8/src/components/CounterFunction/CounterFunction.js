import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const CounterFunction = ({ step = 1 }) => {
  // * PRIMERO SIEMPRE LOS HOOKS QUE SE ASIGNAN A UNA VARIABLE

  const [value, setValue] = useState(1200);
  const [value2, setValue2] = useState(1200);
  const [value3, setValue3] = useState(1200);
  const [value4, setValue4] = useState(1200);

  // * SEGUNDO IRÁN LOS useEffect

  useEffect(() => {
    // console.log("RENDERIZADO DE NUEVO", value);
  }, [value, value2]); // * esto es como componentDidUpdate()

  useEffect(() => {
    // console.log("Componente montado!!!!");
    return () => {
      // * esto es como componentWillUnmount()
      //   console.log("DESMONTADO!");
    };
  }, []); // * esto es como componentDidMount()

  // * TERCERO: FUNCIONES DEL COMPONENTE

  const handleAdd = () => {
    setValue(value + step);
  };
  const handleSubstract = () => {
    setValue(value - step);
  };

  return (
    <>
      <Button onClick={() => handleAdd()} elevated variant={"primary"}>
        Aumentar valor
      </Button>
      <Button onClick={() => handleSubstract()} elevated variant={"secondary"}>
        Disminuir valor
      </Button>
      <h1>{value}</h1>
    </>
  );
};

CounterFunction.propTypes = {
  step: PropTypes.number,
};

export default CounterFunction;
