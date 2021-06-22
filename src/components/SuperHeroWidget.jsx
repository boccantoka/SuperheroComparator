import React, { useState } from "react";

import SearchBar from "./SearchBar";
import SuperHeroCard from "./SuperHeroCard";

import styles from "../styles/superHeroWidget.module.css";

const SuperHeroWidget = () => {
  const [hero, setHero] = useState({});

  return (
    <div className={styles.superHeroWidgetWrap}>
      <SearchBar selectHero={setHero} />
      <div className={styles.superHeroCardWrap}>
        <SuperHeroCard hero={hero} />
      </div>
    </div>
  );
};

export default SuperHeroWidget;
