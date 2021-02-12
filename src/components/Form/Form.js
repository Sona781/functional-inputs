import React from "react";
import s from "./Form.module.scss";

const Form = (props) => {

  let addRowToTable = () => {
    props.addRow(props.firstnameValue, props.secondnameValue, props.emailValue);
  }

  return (
    <div className={s.form}>
      <form>
        <input
          type="text"
          placeholder="Firstname"
          value={props.firstnameValue}
          onChange={props.onFirstnameChange}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={props.secondnameValue}
          onChange={props.onLastnameChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={props.emailValue}
          onChange={props.onEmailChange}
        />
      </form>
      <button className={s.submitButton} onClick={addRowToTable}>
        Add Row
      </button>
    </div>
  );
};

export default Form;
