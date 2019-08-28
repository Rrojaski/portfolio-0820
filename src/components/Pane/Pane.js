import React, { Fragment } from "react";

import styles from "./Pane.module.scss";

const Pane = props => {
  return (
    <Fragment>
      <div className={`${styles.pane}`}>
        <div className={`${styles.paneFront} ${styles[props.type]}`} />
        <div
          className={`${styles.paneBack} ${styles[props.desc]} ${
            styles[props.color]
          }`}
        >
          <p>{props.desc}</p>
          <a target="_blank" href={props.href}>
            <button>Visit Website -></button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default Pane;
