import {Contador} from "./components/Contador";
import Frutas from "./components/Frutas";

const App = () => {
  const saludo = "Bienvenido a React";

  const clasesObjeto = {
    primary: "text-primary",
    danger: "text-danger",
  };
  const user = true;

  const SaludoBienvenida = () => <h2 className="text-success">Bienvenido!</h2>;
  const SaludoDespedida = () => {
    return <h2 className="text-danger">Adioooos!</h2>;
  };

  const frutas = ["🍏", "🍓", "🍌", "🍋"];

  const funcionClick = (nombre) => {
    console.log(`click ${nombre} `);
  };
  return (
    <div>
      <Contador />
      <p className={clasesObjeto.primary}>{saludo}</p>

      {user ? <SaludoBienvenida /> : <SaludoDespedida />}

      <Frutas frutasApp={frutas} />

      <button
        type=""
        className="btn btn-primary"
        onClick={() => funcionClick("programadpr")}>
        dame click
      </button>
    </div>
  );
};

export default App;
