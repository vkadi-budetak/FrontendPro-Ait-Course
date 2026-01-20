import { useEffect } from "react";

export default function Banner() {
  //     let y = 5;
  //   I. useEffect без массива зависимостей
  //   срабатывает при mount и при любых изменениях
  //     useEffect(() => {
  //       console.log("I");
  //     });

  //   II. useEffect с пустым массивом зависимостей
  //   только при маунте
  //     useEffect(() => {
  //       console.log("II");
  //     }, []);

  //   III. useEffect с пустым массивом зависимостей
  //   при маунте и при изменении указанной переменой/переменных
  //     useEffect(() => {
  //       console.log("III");
  //     }, [y]);

  //     IV. useEffect
  //   в качестве return мы можем указать функцию
  //   эта функция сработает при unmount
  //   cleanUp
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Hey");
    }, 10_000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div>Banner</div>;
}
