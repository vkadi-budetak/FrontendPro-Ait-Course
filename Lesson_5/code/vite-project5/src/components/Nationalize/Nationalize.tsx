import { useState } from "react";
import type { NationalizeResponse } from "./types/NationalizeResponse";
import getCountryNameByCode from "../../utils/getCountryNameByCode";

export default function Nationalize() {
  const [name, setName] = useState("");

  const [data, setData] = useState<NationalizeResponse | undefined>(undefined);

  async function fetchNationalize() {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const jsonData = await res.json();
    setData(jsonData);
  }

  return (
    <div>
      <h2>Nationalize 🌍</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <button type="button" onClick={fetchNationalize}>
        Learn nationality
      </button>

      {data && (
        <div>
          <h3>Results</h3>
          <p>Имя: {data.name}</p>
          <p>Данных проанализировано: {data.count}</p>

          <h4>Возможные национальности:</h4>
          <ul>
            {data.country.map((item, index) => (
              <li key={index}>
                {getCountryNameByCode(item.country_id)} —{" "}
                {(item.probability * 100).toFixed(1)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// 📚 Документация API: https://api.nationalize.io/
