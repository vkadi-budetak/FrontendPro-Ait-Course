import { useState } from "react";
import Button from "../ui/Button/Button";
import style from "./Counter.module.css";

// чтобы отрисововались правильное отображения при нажатии на кнопку нужно создать UseState(это Хук)

function Counter() {
  //создается [значение и функция] =  useState(стартовое значения)
  const [count, setCount] = useState<number>(0);
  // хук useState принимает начальное значение состояния
  // возвращает кортеж, где на первом месте
  // находится переменная состояния state
  // а на втором - функция сеттер

  // +1
  function handlePlusOne() {
    setCount((prev) => prev + 1);
    // setCount(count + 1);
  }

  // -2
  function handleMinusTwo() {
    setCount((prev) => prev - 2);
  }

  // сбрасываем до 0
  function handleResetCounter() {
    setCount(0);
  }

  // получаем рандомное число от 0-10
  function handleRandom() {
    setCount(Math.floor(Math.random() * 11));
  }

  return (
    <section className={style.container}>
      <h2>Counter</h2>
      Count: {count}
      <button type="button" onClick={handlePlusOne}>
        +1
      </button>
      <Button onClick={handleMinusTwo} child="-2" />
      <Button onClick={handleResetCounter} child="Reset" />
      <Button onClick={handleRandom} child="Get random" />
      {/* <button type="button" onClick={handleRandom}>
        Get Random
      </button> */}
    </section>
  );
}

export default Counter;
