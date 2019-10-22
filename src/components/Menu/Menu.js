import React, { Fragment } from "react";

import styles from "./Menu.module.scss";

const Menu = props => {
  return (
    <Fragment>
      <div className={`${styles.menu}`} tabIndex="0">
        <div readOnly={true} contentEditable="false" />
        <div readOnly={true} contentEditable="false" />
        <div readOnly={true} contentEditable="false" />
      </div>
      <div className={`${styles.child}`}>{props.children}</div>
    </Fragment>
  );
};
export default Menu;
