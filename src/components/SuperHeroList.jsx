import React from "react";

import styles from "../styles/superHeroList.module.css";

const SuperHeroList = ({
  superHeroList,
  onListItemClick,
  isDisplayed,
  selectHero,
}) => {
  const onClick = (e) => {
    selectHero(JSON.parse(e.target.getAttribute("value")));
    onListItemClick(e);
  };

  let renderedSuperheroList = [];

  if (superHeroList !== undefined && isDisplayed) {
    renderedSuperheroList = superHeroList
      .filter((v, index) => index < 10)
      .map((superHero) => (
        <li
          className={styles.superHeroListItem}
          value={JSON.stringify(superHero)}
          key={superHero.id}
          onClick={onClick}
        >
          {superHero.name}
        </li>
      ));
  } else {
    return <></>;
  }

  return <ul className={styles.superHeroList}>{renderedSuperheroList}</ul>;
};

export default SuperHeroList;
