import React, { Fragment } from "react";

import styles from "./Button.module.scss";

const Button = props => {
  return (
    <Fragment>
      <a target='_blank' href={props.path}>
        <button className={`${styles.button} ${styles[props.type]}`}>{props.children}</button>
      </a>
    </Fragment>
  );
};
export default Button;
