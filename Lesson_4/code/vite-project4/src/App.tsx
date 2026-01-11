import "./App.css";
import Counter from "./components/Counter/Counter";
import Goodbye from "./components/Goodbye/Goodbye";
import Greetings from "./components/Greetings/Greetings";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import IdealWeihtCalculator from "./components/IdealWeihtCalculator/IdealWeihtCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  const johnDawson = {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x7RFFT8-4WY26mVJxhk5lvmoTIhb_0NzAQ&s",
    name: "John Dawson",
    description: "Full Stack Dev",
  };

  return (
    <>
      <p>Hallo World!</p>
      {/* props */}
      <Greetings name="Vlad" />
      <Greetings name="20" />

      <Goodbye familyName="Блааа Блааааблаблович" score={90} />
      <Goodbye familyName="Блааа Блааааблаблович" />

      <Counter />
      <Counter />

      <Tool paragraph="Important step for our journey" />

      <IdealWeihtCalculator />

      <ProfileCard {...johnDawson} />

      <SpaceMissionForm />
    </>
  );
}

export default App;
