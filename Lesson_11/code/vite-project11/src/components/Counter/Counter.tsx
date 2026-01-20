import { useCount } from "../../hooks/useCount";

import style from "./Counter.module.css";

function Counter() {
  const { count, increment, decrement, clear } = useCount();
  return (
    <section className={style.container}>
      <h2 className={style.heading}>Counter</h2>
      Count: {count}
      <button type="button" onClick={() => increment(1)}>
        +1
      </button>
      <button type="button" onClick={() => decrement(1)}>
        -1
      </button>
      <button type="button" onClick={clear}>
        Clear
      </button>
    </section>
  );
}

export default Counter;
