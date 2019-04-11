import React from "react";

function NoMatchPage(props) {
  return (
    <div className="AboutPage">
      <h2>{props.name}</h2>
      <h2>404</h2>
      <p>Haha!!! There is nothing here.</p>
    </div>
  );
}

export default NoMatchPage;
