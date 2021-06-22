import React, { useEffect, useState } from "react";

import styles from "../styles/counter.module.css";

const Counter = ({ number, duration }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let count = 0;
    const end = parseInt(number);

    if (count === end) return;

    const incrementTime = (parseInt(duration) / end) * 1000;

    const timerId = setInterval(() => {
      count += 1;
      setCounter(count);
      if (count === end) clearInterval(timerId);
    }, incrementTime);

    return () => {
      clearInterval(timerId);
    };
  }, [number, duration]);

  return (
    <div className={styles.counterWrap}>
      <h3>{counter}</h3>
    </div>
  );
};

export default Counter;
