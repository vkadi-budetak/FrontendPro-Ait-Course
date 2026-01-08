import "./App.css";
import Counter from "./components/Counter/Counter";
import Goodbye from "./components/Goodbye/Goodbye";
import Greetings from "./components/Greetings/Greetings";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <>
      <p>Hallo World!</p>
      {/* props */}
      <Greetings name="Vlad" />
      <Greetings name="20" />

      <Tool paragraph="Important step for our journey" />
      <ProfileCard
        avatar="123"
        name="VLad"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem molestiae quibusdam non sit placeat? Tempore corrupti ullam, quo ea vel ipsum non fugiat. Natus corrupti nostrum reprehenderit reiciendis fuga quaerat!"
      />

      <Goodbye familyName="Блааа Блааааблаблович" score={90} />
      <Goodbye familyName="Блааа Блааааблаблович" />
      <Counter />
    </>
  );
}

export default App;
