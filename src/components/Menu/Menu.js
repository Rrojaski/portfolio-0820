import React, { Fragment } from "react";

import styles from "./Menu.module.scss";

const Menu = props => {
  return (
    <Fragment>
      <div className={`${styles.menu}`} contenteditable="true">
        <div />
        <div />
        <div />
      </div>
      <div className={`${styles.child}`}>{props.children}</div>
    </Fragment>
  );
};
export default Menu;
