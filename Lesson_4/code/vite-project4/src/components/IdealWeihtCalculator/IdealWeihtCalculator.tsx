import { useState } from "react";

// Контролируемый State

export default function IdealWeihtCalculator() {
  const [height, setHeight] = useState("170");
  const [idealWeight, setIdeaalWeight] = useState(0);
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("female");

  function handlCalculateIdeaWeight() {
    const weightToSubtract = gender === "male" ? 100 : 110;

    const weight = Number(height) - weightToSubtract;

    if (weight < 0) {
      setMessage("Our program does not work for height less than 100cm");
    } else {
      setMessage(""); // тут убираем сообщения о ошибки
      setIdeaalWeight(weight);
    }
  }

  return (
    <div>
      <h2>Calculate your ideal weight</h2>

      <select
        name="gender"
        id=""
        title="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label htmlFor="height">Height: </label>
      <input
        type="text"
        name="height"
        id="height"
        placeholder="height entry"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button type="button" onClick={handlCalculateIdeaWeight}>
        Clculator
      </button>
      {message ? <p>{message}</p> : null}
      {idealWeight && !message ? (
        <p>Your ideal weight is {idealWeight}</p>
      ) : null}
    </div>
  );
}
