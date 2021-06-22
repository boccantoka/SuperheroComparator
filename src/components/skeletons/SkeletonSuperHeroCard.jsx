import React from "react";
import shortid from "shortid";

import SkeletonProgressBar from "./SkeletonProgressBar";
import SkeletonProgressRing from "./SkeletonProgressRing";
import Shimmer from "./Shimmer";

import styles from "../../styles/skeletons/skeletonSuperHeroCard.module.css";

const SkeletonSuperHeroCard = () => (
  <div className={styles.cardWrapper}>
    <div className={styles.card}>
      <div className={styles.avatar} />
      <div className={styles.title} />
      {[0, 1, 2, 3, 4, 5, 6].map(() => (
        <SkeletonProgressBar key={shortid.generate()} />
      ))}
      <SkeletonProgressRing />
      <Shimmer />
    </div>
  </div>
);

export default SkeletonSuperHeroCard;
