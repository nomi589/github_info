import React from "react";
import { getUsers } from "../helpers/api";
import InfoCards from "./InfoCards";

import "./styles/user.css";

export default function User() {
  const [userInput, setUserInput] = React.useState("");
  const [usersData, setUsersData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    setError(null);

    getUsers(userInput)
      .then((users) => {
        setUsersData(users);
      })
      .catch((error) => {
        setError(
          "Could not fetch data. Please check your internet connection."
        );
      });
  };

  return (
    <React.Fragment>
      <section className="input-form">
        <input
          type="text"
          placeholder="enter github username to search"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="button"
          value="Search"
          disabled={!userInput}
          onClick={handleSubmit}
        />
      </section>
      <section className="error-display">{error && <pre>{error}</pre>}</section>
      <section className="users-display">
        {usersData && <InfoCards data={usersData} />}
      </section>
    </React.Fragment>
  );
}
