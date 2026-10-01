import { useState } from "react";
import { numberToWords } from "../utils/numberToWords";

export default function NumberToWordsComponent() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value) => {
    setNumber(value);
    setError("");
    setResult("");

    if (value === "") return;

    try {
      const text = numberToWords(value);
      setResult(text);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page">
      <h2>Traductor de Numeros a Letras</h2>
      <label>
        Numero (1 a 1000):
        <input
          type="number"
          min="1"
          max="1000"
          value={number}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
      {error && <p className="error">{error}</p>}
      {result && (
        <p className="resultado">
          En letras: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
}
