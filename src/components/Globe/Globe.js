import React, { Fragment } from "react";

import styles from "./Globe.module.scss";

const Globe = props => {
  return (
    <Fragment>
      <div className={`${styles.globe}`}>
        <div className={`${styles.ship}`}/>
        <div className={`${styles.inner}`} />
      </div>
    </Fragment>
  );
};
export default Globe;
