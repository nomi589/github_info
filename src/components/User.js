import React from "react";
import { getUsers } from "../helpers/api";
import InputForm from "./InputForm";
import InfoCards from "./InfoCards";

export default function User() {
  const [userInput, setUserInput] = React.useState("");
  const [usersData, setUsersData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    setError(null);
    setUsersData(null);
    setLoading(true);

    getUsers(userInput)
      .then((users) => {
        setLoading(false);
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
      <InputForm
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        searchBtnDisabled={!userInput}
      />
      {loading && <pre>fetching data...</pre>}
      {error && <pre>{error}</pre>}
      {usersData && <InfoCards data={usersData} />}
    </React.Fragment>
  );
}
