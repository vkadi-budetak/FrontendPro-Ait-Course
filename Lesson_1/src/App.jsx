import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import Feedback from "./components/Feedback/Feedback";

function App() {
  // хук useState создает хранилище и отдаст функцию;
  const [count, setCount] = useState(0);
  const [countLike, likeCount] = useState(0);
  const [countDislike, DislikeCount] = useState(0);

  // setCount(count+1)
  // setCount((prev)=>prev+1)

  const onMinus = () => setCount((prev) => prev - 1);
  const onLike = () => likeCount((prev) => prev + 1);
  const onDislike = () => DislikeCount((prev) => prev + 1);

 const onReset = () => {
  likeCount(0); 
  DislikeCount(0);
};


  return (
    <div className="app">
      React Interoduction
      <div className="counter-wrapper">
        <Button name="plus" onClick={() => setCount((prev) => prev + 1)} />
        <Button name="minus" onClick={onMinus} />
        <div>{count}</div>
      </div>

      {/* Вызов компонента */}
      <div className="like-wrapper">
        <div className="like-count">{countLike}</div>
        <Feedback name="Like" onClick={onLike} />

        <Feedback name="Dislike" onClick={onDislike} />
        <div className="like-count">{countDislike}</div>
      </div>
      <Feedback name="Reset Results" onClick={onReset}/>
    </div>
  );
}

export default App;
