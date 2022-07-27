import {useState} from "react";

export const Contador = () => {
  const [contador, setContador] = useState(-1);

  const aumentar = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  return (
    <>
      <h2>Contador</h2>
      <h3>{contador}</h3>
      <button className="btn btn-dark" onClick={aumentar}>
        Aumentar
      </button>
    </>
  );
};
