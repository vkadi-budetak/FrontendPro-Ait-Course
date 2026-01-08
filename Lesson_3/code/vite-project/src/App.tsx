import "./App.css";
import Counter from "./components/Counter/Counter";
import Goodbye from "./components/Goodbye/Goodbye";
import Greetings from "./components/Greetings/Greetings";

function App() {
  return (
    <>
      <p>Hallo World!</p>
      {/* props */}
      <Greetings name="Vlad" />
      <Greetings name="20" />

      <Goodbye familyName="Блааа Блааааблаблович" score={90} />
      <Goodbye familyName="Блааа Блааааблаблович" />

      <Counter />
    </>
  );
}

export default App;
