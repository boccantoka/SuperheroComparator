import React from "react";

import SuperHeroWidget from "./SuperHeroWidget";

import styles from "../styles/app.module.css";

const App = () => (
  <div className={styles.app}>
    <div className={styles.appWrap}>
      <SuperHeroWidget />
      <SuperHeroWidget />
    </div>
  </div>
);
export default App;
