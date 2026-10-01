import { useState } from "react";

export default function AddingMachine() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const val1 = Number(num1);
  const val2 = Number(num2);
  const hasNumbers = num1 !== "" && num2 !== "" && !Number.isNaN(val1) && !Number.isNaN(val2);
  const result = hasNumbers ? val1 + val2 : null;

  return (
    <div className="page">
      <h2>Sumadora</h2>
      <div className="form-row">
        <label>
          Numero 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
        <label>
          Numero 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      {result !== null && (
        <p className="resultado">Resultado: <strong>{result}</strong></p>
      )}
    </div>
  );
}
