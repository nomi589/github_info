import React from "react";
import { getUsers } from "../helpers/api";
import InfoCards from "./InfoCards";

import "./styles/user.css";

export default function User() {
  const [userInput, setUserInput] = React.useState("");
  const [usersData, setUsersData] = React.useState(null);

  const handleSubmit = (e) => {
    console.log("submitted");
    getUsers(userInput).then((users) => {
      setUsersData(users);
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
      <section className="users-display">
        {usersData && <InfoCards data={usersData} />}
      </section>
    </React.Fragment>
  );
}
