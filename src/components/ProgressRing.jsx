import React from "react";

import Counter from "./Counter";

import styles from "../styles/progressRing.module.css";

const ProgressRing = ({ overallPercentage, overallPower }) => {
  const getCircumference = () => {
    const r = 60;
    const circumference = r * 2 * Math.PI;
    return circumference;
  };

  const getStrokeDashoffset = () => {
    const circumference = getCircumference();
    const offset = circumference - (overallPercentage / 100) * circumference;
    return offset;
  };

  return (
    <div className={styles.progressRingWrap}>
      <svg className={styles.circle}>
        <circle cx="100" cy="100" r="60" />
        <circle
          className={styles.inner}
          style={{
            strokeDashoffset: `${getStrokeDashoffset()}`,
            strokeDasharray: `${getCircumference()} ${getCircumference()}`,
          }}
          cx="100"
          cy="100"
          r="60"
        />
      </svg>
      <div>
        <Counter number={overallPower} duration="2" />
      </div>
    </div>
  );
};

export default ProgressRing;
