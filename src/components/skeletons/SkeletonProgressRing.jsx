import React from "react";

import styles from "../../styles/skeletons/skeletonProgressRing.module.css";

const skeletonProgressRing = () => (
  <div>
    <svg className={styles.circle}>
      <circle className={styles.outer} cx="100" cy="100" r="60" />
      <circle className={styles.inner} cx="100" cy="100" r="60" />
    </svg>
  </div>
);

export default skeletonProgressRing;
