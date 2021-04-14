import React from "react";
import { getUser } from "../helpers/api";

import "./styles/user.css";

export default function User() {
  const [user, setUser] = React.useState("");
  const [userData, setUserData] = React.useState(null);

  const handleSubmit = (e) => {
    console.log("submitted");
    getUser(user).then((userData) => {
      setUserData(userData);
    });
  };

  return (
    <React.Fragment>
      <section className="input-form">
        <input
          type="text"
          placeholder="enter github username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input type="button" value="Get user info" onClick={handleSubmit} />
      </section>
      <section className="user-display">
        {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
      </section>
    </React.Fragment>
  );
}
