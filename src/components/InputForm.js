import React from "react";

import "./styles/inputform.css";

export default function InputForm(props) {
  return (
    <section className="input-form">
      <input
        type="text"
        placeholder="enter github username to search"
        onChange={props.handleInput}
      />
      <input
        type="button"
        value="Search"
        disabled={props.searchBtnDisabled}
        onClick={props.handleSubmit}
      />
    </section>
  );
}
