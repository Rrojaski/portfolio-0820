import React, { Fragment } from "react";

import styles from "./Form.module.scss";

const Form = props => {
  return (
    <Fragment>
      <form className={`${styles.form}`}>
        <div className={`${styles.name}`}>
          <label>Name</label>
          <input type="test" required />
        </div>
        <div className={`${styles.email}`}>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className={`${styles.message}`}>
          <label>Message</label>
          <textarea required />
        </div>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};
export default Form;
