import { useState } from "react";

export default function MultiplicationTable() {
  const [number, setNumber] = useState("");

  const targetNumber = Number(number);
  const isValid = number !== "" && !Number.isNaN(targetNumber);
  const rows = isValid ? Array.from({ length: 14 }, (_, i) => i + 1) : [];

  return (
    <div className="page">
      <h2>Tabla de Multiplicar</h2>
      <label>
        Tabla del:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>

      {isValid && (
        <ul className="tabla-multiplicar">
          {rows.map((row) => (
            <li key={row}>
              {targetNumber} x {row} = {targetNumber * row}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
