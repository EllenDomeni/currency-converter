import { useState, useEffect } from "react";
import { getRates } from "../services/api";

export default function Converter() {
  const [value, setValue] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [result, setResult] = useState(0);

  async function convert() {
    try {
      const data = await getRates(from);
      const rate = data.rates[to];

      setResult((value * rate).toFixed(2));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    convert();
  }, [value, from, to]);

  function swap() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div>
      <h2>Conversor 💱</h2>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option>USD</option>
        <option>BRL</option>
        <option>EUR</option>
      </select>

      <button onClick={swap}>🔄</button>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option>USD</option>
        <option>BRL</option>
        <option>EUR</option>
      </select>

      <h3>Resultado: {result}</h3>
    </div>
  );
}