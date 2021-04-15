import React from "react";
import { getRepos } from "../helpers/api";
import InputForm from "./InputForm";

export default function Repos() {
  const [repoInput, setRepoInput] = React.useState("");
  const [reposData, setReposData] = React.useState(null);

  const handleInput = (e) => {
    setRepoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("submitted");
    getRepos(repoInput).then((repos) => {
      setReposData(repos);
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
      {reposData && <pre>{JSON.stringify(reposData, null, 2)}</pre>}
    </React.Fragment>
  );
}
