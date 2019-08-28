import React, { Fragment } from "react";

import styles from "./Overlay.module.scss";

const Overlay = props => {
  return (
    <Fragment>
      <div className={`${styles.overlay} ${styles[props.section]} ${styles[props.position]}`}>{props.children}</div>
    </Fragment>
  );
};
export default Overlay;
