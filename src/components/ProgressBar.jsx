import React from "react";

import styles from "../styles/progressBar.module.css";

const ProgressBar = ({ labelName, max, value }) => {
  const calculateProgressValue = () => {
    if (value === "null") return 0;

    return value <= 100 ? (value / max) * 100 : 100;
  };

  return (
    <div className={styles.progressBarWrap}>
      <p className={styles.progressBarLabel}>{labelName}</p>
      <div className={styles.outer}>
        <div>
          <div
            className={styles.inner}
            style={{ width: `${calculateProgressValue()}%` }}
          />
        </div>
      </div>
      <span className={styles.progressBarValue}>
        {value !== "null" ? value : "Not available."}
      </span>
    </div>
  );
};

export default ProgressBar;
