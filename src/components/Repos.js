import React from "react";
import { getRepos } from "../helpers/api";
import InputForm from "./InputForm";
import InfoCards from "./InfoCards";

export default function Repos() {
  const [repoInput, setRepoInput] = React.useState("");
  const [reposData, setReposData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleInput = (e) => {
    setRepoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    setError(null);
    setReposData(null);

    getRepos(repoInput)
      .then((repos) => {
        setLoading(false);
        setReposData(repos);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(
          "Could not fetch data. Please check your internet connection."
        );
      });
  };

  return (
    <React.Fragment>
      <InputForm
        placeholder="enter a language name e.g. 'javascript'..."
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        searchBtnDisabled={!repoInput}
      />
      {loading && <pre>fetching data...</pre>}
      {error && <pre>{error}</pre>}
      {reposData && <InfoCards data={reposData} />}
    </React.Fragment>
  );
}
