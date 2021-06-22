import React from "react";
import styles from "../../styles/skeletons/skeletonProgressBar.module.css";

const SkeletonProgressBar = () => (
  <div className={styles.wrap}>
    <div className={styles.label} />
    <div className={styles.outer}>
      <div className={styles.inner} />
    </div>
  </div>
);

export default SkeletonProgressBar;
