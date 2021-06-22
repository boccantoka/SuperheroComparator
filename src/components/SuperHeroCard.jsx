import React, { useState, useEffect } from "react";
import shortid from "shortid";

import ProgressBar from "./ProgressBar";
import ProgressRing from "./ProgressRing";
import SkeletonSuperHeroCard from "./skeletons/SkeletonSuperHeroCard";

import styles from "../styles/superHeroCard.module.css";

const SupherHeroCard = ({ hero }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [hero.id]);

  const getOverallPercentage = () => {
    const max = 600;
    const current = Object.values(hero.powerstats)
      .map((val) => parseInt(val, 10))
      .reduce((a, b) => a + b);
    return (current / max) * 100;
  };

  const getOverallPower = () =>
    Object.values(hero.powerstats)
      .map((val) => parseInt(val, 10))
      .reduce((a, b) => a + b);

  if (Object.keys(hero).length !== 0) {
    return (
      <div>
        <div style={{ display: imgLoaded ? "none" : "block" }}>
          <SkeletonSuperHeroCard />
        </div>
        <div
          className={styles.superHeroCard}
          style={{ display: imgLoaded ? "flex" : "none" }}
        >
          <img
            src={hero.image.url}
            className={styles.superHeroImg}
            onLoad={() => setImgLoaded(true)}
            alt=""
          />
          <h3>{hero.name}</h3>

          {Object.keys(hero.powerstats).map((key) => (
            <ProgressBar
              key={shortid.generate()}
              labelName={key}
              max={100}
              value={hero.powerstats[key]}
            />
          ))}

          <ProgressRing
            overallPercentage={getOverallPercentage()}
            overallPower={getOverallPower()}
          />
        </div>
      </div>
    );
  }
  return <></>;
};

export default SupherHeroCard;
