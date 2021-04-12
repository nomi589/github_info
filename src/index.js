import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  const [value, setValue] = React.useState(5);

  return <h1>{value}</h1>;
}

ReactDOM.render(<App />, document.getElementById("app"));
