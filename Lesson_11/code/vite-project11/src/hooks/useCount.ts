import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCount = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used inside AuthProvider");
  }
  const { count, setCount } = context;

  function increment(num: number) {
    setCount((prev) => prev + num);
  }

  function decrement(num: number) {
    setCount((prev) => prev - num);
  }

  function clear() {
    setCount(0);
  }

  return { count, increment, decrement, clear };
};
