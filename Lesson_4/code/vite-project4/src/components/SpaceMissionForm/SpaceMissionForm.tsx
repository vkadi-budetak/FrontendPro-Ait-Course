import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";
import { planetOptions } from "./selectOption";

export default function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [namePlanet, setNamePlanet] = useState("noPlanet");
  // const [message, setMessage] = useState("");

  // function displayNameEndPlanet() {
  //   if (name.trim() !== "" && namePlanet !== "noPlanet") {
  //     setMessage(`🧑‍🚀 Astronaut ${name} is headed to ${namePlanet}!`);
  //   } else {
  //     setMessage("Please enter your name and choose a planet to begin.");
  //   }
  // }

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="Name"
          id="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="namePlanet">Destination: </label>
        {/* <select
          name="namePlanet"
          id="namePlanet"
          title="namePlanet"
          value={namePlanet}
          onChange={(e) => setNamePlanet(e.target.value)}
        >
          <option value="noPlanet" disabled>
            Select a planet
          </option>
          <option value="Mars">Mars</option>
          <option value="Venus">Venus</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>

        </select> */}

        {/* альтернативний варіант запису із винесенням  option в окремий файл - selectOtion */}
        <select
          name={namePlanet}
          onChange={(e) => setNamePlanet(e.target.value)}
          value={namePlanet}
          title="namePlanet"
        >
          {planetOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      {/* <button type="button" onClick={displayNameEndPlanet}>
        Registration
      </button> */}

      {/* Альтернативний варіант c використанням функції displayNameEndPlanet і кнопки button */}
      {/* <h3>{message}</h3> */}

      <div>
        {name.trim() ? (
          <span>
            🧑‍🚀 Astronaut <strong>{name}</strong> is headed to{" "}
            <strong>{namePlanet}</strong>!
          </span>
        ) : (
          <span>Please enter your name to begin your mission.</span>
        )}
      </div>
    </div>
  );
}
