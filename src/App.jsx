import { useState } from "react";
import Home from "./pages/Home.jsx";
import AddingMachine from "./pages/addingMachine.jsx";
import NumberToWords from "./pages/numberToWords.jsx";
import MultiplicationTable from "./pages/multiplicationTable.jsx";
import PersonalExperience from "./pages/personalExperience.jsx";

const PAGES = {
  home: { label: "Pagina Inicial", component: Home },
  sumadora: { label: "Sumadora", component: AddingMachine },
  numeroALetras: { label: "Numeros a Letras", component: NumberToWords },
  tabla: { label: "Tabla de Multiplicar", component: MultiplicationTable },
  experiencia: { label: "Experiencia Personal", component: PersonalExperience },
};

export default function App() {
  const [page, setPage] = useState("home");
  const CurrentPage = PAGES[page].component;

  return (
    <div className="app-layout">
      <nav className="sidebar">
        <h1>Menu</h1>
        <ul>
          {Object.entries(PAGES).map(([key, { label }]) => (
            <li key={key}>
              <button
                className={key === page ? "activo" : ""}
                onClick={() => setPage(key)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        <CurrentPage />
      </main>
    </div>
  );
}
