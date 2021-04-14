import React from "react";

export default function InfoCards(props) {
  const data = props.data;

  return (
    <ul>
      {data.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </ul>
  );
}