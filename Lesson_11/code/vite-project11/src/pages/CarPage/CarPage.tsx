import { useParams } from "react-router-dom";

export default function CarPage() {
  const { model } = useParams();
  return (
    <div>
      CarPage
      <p>Car with model: {model}</p>
    </div>
  );
}

// Ввожу в адресному рядку - http://localhost:5173/cars/bmw-x-5

//! Задания
// Создайте компонент, который отображает следующую информацию про машину
// например если открыт путь /cars/bmw-x-5
// Компонент должен отобразить следующий текст:
// Car with model bmw-x-5
