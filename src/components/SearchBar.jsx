import React, { useState, useEffect } from "react";

import SuperHeroList from "./SuperHeroList";
import SuperHero from "../APIs/SuperHero";

import styles from "../styles/searchBar.module.css";

const SearchBar = ({ selectHero }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [superHeroList, setSuperHeroList] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [makeRequest, setMakeRequest] = useState(true);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onInputClick = () => {
    setMakeRequest(true);
  };

  const onListItemClick = (e) => {
    setTerm(e.target.innerText);
    setMakeRequest(false);
    setIsDisplayed(false);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (makeRequest) {
      if (debouncedTerm !== "") {
        const getSuperHeroes = async () => {
          try {
            const response = await SuperHero.get(`/search/${debouncedTerm}`);
            setSuperHeroList(response.data.results);
          } catch (err) {
            console.warn("error");
          }
        };

        getSuperHeroes();
        setIsDisplayed(true);
      } else {
        setSuperHeroList([]);
      }
    }
  }, [debouncedTerm, makeRequest]);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.searchBarWrap}>
      <form onSubmit={onSubmit} onClick={onInputClick} autoComplete="off">
        <div>
          <label>
            <span className={styles.searchBarLabel}>
              Search for a Superhero
            </span>
            <input
              className={styles.searchBar}
              type="text"
              placeholder="search for super hero"
              value={term}
              onChange={onInputChange}
            />
          </label>
        </div>
      </form>
      <SuperHeroList
        superHeroList={superHeroList}
        onListItemClick={onListItemClick}
        isDisplayed={isDisplayed}
        selectHero={selectHero}
      />
    </div>
  );
};
export default SearchBar;
