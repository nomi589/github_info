import React from "react";

import "./styles/infocards.css";

export default function InfoCards(props) {
  const data = props.data;

  return (
    <section className="info-display">
      <ul className="info-cards">
        {data.map((item, index) => {
          return (
            <li key={index} className="info-card">
              <section className="avatar">
                <img src={item.avatar} />
              </section>
              <section className="info">
                <h2>{item.title}</h2>
                {item.owner && (
                  <span className="metadata">
                    by&nbsp;
                    <a href={item.owner_url}>{item.owner}</a>
                  </span>
                )}
                <p>
                  <a href={item.url}>{item.url}</a>
                </p>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
