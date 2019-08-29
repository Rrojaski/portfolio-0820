import React, { Fragment } from "react";

import styles from "./Menu.module.scss";

const Menu = props => {
  return (
    <Fragment>
      <div className={`${styles.menu}`} tabindex="0">
        <div readonly="true" contenteditable="false" />
        <div readonly="true" contenteditable="false" />
        <div readonly="true" contenteditable="false" />
      </div>
      <div className={`${styles.child}`}>{props.children}</div>
    </Fragment>
  );
};
export default Menu;
