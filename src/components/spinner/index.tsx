import React from "react";

import styles from "./Spinner.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles["loading-overlay"]}>
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loading;
